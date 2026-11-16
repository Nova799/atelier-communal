#!/usr/bin/env python3
"""
Diorama Tata Somba — Atacora (Natitingou).

Construit un petit diorama low-poly : collines de l'Atacora, maison tata somba
avec toit de chaume, chemin en sable, baobabs et rochers. Exporte un GLB
autonome (aucun texture externe) pour la direction 22 « Relief ».

Usage :
    PYTHONPATH=<venv>/lib/python3.13/site-packages blender --background --python-use-system-env \
        --python scripts/blender_atakora.py -- assets/models/atakora-diorama.glb [--render]

(Le module `io_scene_gltf2` de Blender importe numpy : fournir numpy via un venv jetable
et `--python-use-system-env`, ou via tout environnement Python 3.13 visible par Blender.)
"""
import bpy
import math
import sys

OUT = sys.argv[sys.argv.index("--") + 1] if "--" in sys.argv else "assets/models/atakora-diorama.glb"

# --- remise à zéro -------------------------------------------------------
bpy.ops.wm.read_factory_settings(use_empty=True)

def mat(name, color, roughness=0.95, metallic=0.0):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    bsdf = m.node_tree.nodes["Principled BSDF"]
    bsdf.inputs["Base Color"].default_value = (*color, 1.0)
    bsdf.inputs["Roughness"].default_value = roughness
    bsdf.inputs["Metallic"].default_value = metallic
    return m

GRASS = mat("savanna", (0.42, 0.36, 0.19), 1.0)
LATERITE = mat("laterite", (0.60, 0.32, 0.16), 0.96)
THATCH = mat("thatch", (0.30, 0.235, 0.13), 1.0)
LIMEWASH = mat("limewash", (0.90, 0.86, 0.75), 0.9)
BARK = mat("bark", (0.26, 0.20, 0.15), 1.0)
LEAF = mat("leaf", (0.29, 0.36, 0.18), 0.95)
ROCK = mat("rock", (0.34, 0.32, 0.29), 0.9)
SAND = mat("sandpath", (0.52, 0.43, 0.30), 1.0)
DOOR = mat("doorwood", (0.11, 0.07, 0.045), 1.0)

def elev(x, y):
    e = 1.55 * math.exp(-(((x - 6.5) ** 2 + (y - 3.5) ** 2) / 30.0))
    e += 1.05 * math.exp(-(((x + 6.0) ** 2 + (y + 4.0) ** 2) / 17.0))
    e += 0.60 * math.exp(-(((x - 0.5) ** 2 + (y - 7.5) ** 2) / 11.0))
    e += 0.16 * math.sin(x * 0.31) * math.cos(y * 0.27)
    e += 0.08 * math.sin(x * 0.83 + y * 0.45)
    return e

# --- terrain : grille 44×44 sur 36×36 unités ------------------------------
N = 44
EXTENT = 36.0
HALF = EXTENT / 2.0
verts = []
for iy in range(N + 1):
    for ix in range(N + 1):
        x = -HALF + EXTENT * ix / N
        y = -HALF + EXTENT * iy / N
        verts.append((x, y, elev(x, y)))
faces = []
for iy in range(N):
    for ix in range(N):
        i0 = iy * (N + 1) + ix
        faces.append((i0, i0 + 1, i0 + N + 2, i0 + N + 1))
mesh = bpy.data.meshes.new("Terrain")
mesh.from_pydata(verts, [], faces)
mesh.update()
terrain = bpy.data.objects.new("Terrain", mesh)
bpy.context.collection.objects.link(terrain)
terrain.data.materials.append(GRASS)
for p in mesh.polygons:
    p.use_smooth = True

def place(obj, x, y, z_extra=0.0):
    obj.location = (x, y, elev(x, y) + z_extra)

# --- chemin de sable en S, collé au terrain --------------------------------
PATH_POINTS = [(0.0, -11.5), (1.6, -8.0), (2.1, -4.5), (1.4, -1.6), (0.6, 0.6), (0.9, 2.6)]
PATH_WIDTH = 1.05
for i in range(len(PATH_POINTS) - 1):
    ax, ay = PATH_POINTS[i]
    bx, by = PATH_POINTS[i + 1]
    dx, dy = bx - ax, by - ay
    length = math.hypot(dx, dy)
    nx, ny = -dy / length * PATH_WIDTH / 2.0, dx / length * PATH_WIDTH / 2.0
    av, bv = (ax - nx, ay - ny, 0), (ax + nx, ay + ny, 0)
    cv, dv = (bx - nx, by - ny, 0), (bx + nx, by + ny, 0)
    grid = [av, bv, dv, cv]
    for idx, (px, py, _) in enumerate(grid):
        grid[idx] = (px, py, elev(px, py) + 0.055)
    pmesh = bpy.data.meshes.new(f"PathSeg{i}")
    pmesh.from_pydata(grid, [], [(0, 1, 2, 3)])
    pmesh.update()
    obj = bpy.data.objects.new(f"PathSeg{i}", pmesh)
    bpy.context.collection.objects.link(obj)
    obj.data.materials.append(SAND)

# --- maison tata somba ------------------------------------------------------
HX, HY = 0.85, 2.1
hb = elev(HX, HY)

def add_cylinder(name, radius_top, radius_bottom, depth, x, y, z, material):
    bpy.ops.mesh.primitive_cone_add(radius1=radius_bottom, radius2=radius_top, depth=depth, vertices=28, location=(x, y, z))
    o = bpy.context.active_object
    o.name = name
    o.data.materials.append(material)
    for p in o.data.polygons:
        p.use_smooth = True
    return o

def add_cone(name, radius, depth, x, y, z, material):
    bpy.ops.mesh.primitive_cone_add(radius1=radius, radius2=0.06, depth=depth, vertices=28, location=(x, y, z))
    o = bpy.context.active_object
    o.name = name
    o.data.materials.append(material)
    for p in o.data.polygons:
        p.use_smooth = True
    return o

def add_box(name, size, x, y, z, material):
    bpy.ops.mesh.primitive_cube_add(size=1.0, location=(x, y, z))
    o = bpy.context.active_object
    o.name = name
    o.dimensions = size
    o.data.materials.append(material)
    return o

# corps principal
add_cylinder("TataSombaBody", 1.72, 2.12, 3.15, HX, HY, hb + 1.575, LATERITE)
# terrasse / parapet (tata somba : terrasse ouverte)
add_cylinder("TataSombaTerrace", 1.98, 1.98, 0.30, HX, HY, hb + 3.15 + 0.13, LATERITE)
# toit de chaume principal
add_cone("TataSombaRoof", 2.05, 1.32, HX, HY, hb + 3.15 + 0.30 + 0.62, THATCH)
# annexe
AX, AY = HX + 2.35, HY + 0.55
ab = elev(AX, AY)
add_cylinder("TataSombaAnexo", 1.02, 1.24, 2.35, AX, AY, ab + 1.175, LATERITE)
add_cone("TataSombaAnexoRoof", 1.28, 1.02, AX, AY, ab + 2.35 + 0.47, THATCH)
# anneaux chaulés décoratifs
add_cylinder("TataBand1", 2.155, 2.155, 0.16, HX, HY, hb + 1.05, LIMEWASH)
add_cylinder("TataBand2", 1.93, 1.93, 0.14, HX, HY, hb + 2.30, LIMEWASH)
add_cylinder("TataAnexoBand", 1.245, 1.245, 0.13, AX, AY, ab + 1.35, LIMEWASH)
# porte (face sud/visible depuis le chemin)
add_box("TataDoor", (0.86, 0.28, 1.28), HX, HY - 1.95, hb + 0.72, DOOR)
add_box("TataDoorHead", (1.16, 0.30, 0.18), HX, HY - 1.95, hb + 1.38, LIMEWASH)

# --- baobabs -----------------------------------------------------------------
def baobab(name, x, y, scale):
    tb = elev(x, y)
    bpy.ops.mesh.primitive_cylinder_add(radius=0.42 * scale, depth=1.7 * scale, vertices=12, location=(x, y, tb + 0.85 * scale))
    trunk = bpy.context.active_object
    trunk.name = name + "_trunk"
    trunk.data.materials.append(BARK)
    bpy.ops.mesh.primitive_ico_sphere_add(radius=0.95 * scale, subdivisions=2, location=(x, y, tb + 1.95 * scale))
    crown = bpy.context.active_object
    crown.name = name + "_crown"
    crown.scale = (1.25, 1.25, 0.78)
    crown.data.materials.append(LEAF)
    for p in crown.data.polygons:
        p.use_smooth = True

baobab("BaobabA", -3.4, -2.6, 1.15)
baobab("BaobabB", 4.6, 4.4, 0.95)
baobab("BaobabC", -5.2, 3.1, 0.8)

# --- rochers -----------------------------------------------------------------
def rock(name, x, y, scale):
    rb = elev(x, y)
    bpy.ops.mesh.primitive_ico_sphere_add(radius=0.8 * scale, subdivisions=1, location=(x, y, rb + 0.32 * scale))
    o = bpy.context.active_object
    o.name = name
    o.scale = (1.3, 0.9, 0.72)
    o.data.materials.append(ROCK)

rock("RockA", -2.1, 5.6, 1.1)
rock("RockB", 5.6, -3.2, 0.85)
rock("RockC", -6.2, -0.8, 0.7)

# --- export GLB --------------------------------------------------------------
bpy.ops.export_scene.gltf(
    filepath=OUT,
    export_format="GLB",
    export_yup=True,
    export_apply=True,
    export_cameras=False,
    export_lights=False,
    export_animations=False,
)
print("GLB written:", OUT)

# --- aperçu Cycles (--render dans les arguments) ------------------------------
if "--render" in sys.argv:
    # monde : ciel chaud dégradé, soleil bas
    world = bpy.data.worlds.new("AtakoraSky")
    world.use_nodes = True
    bg = world.node_tree.nodes["Background"]
    bg.inputs["Color"].default_value = (0.42, 0.26, 0.18, 1.0)
    bg.inputs["Strength"].default_value = 0.75
    bpy.context.scene.world = world

    sun_data = bpy.data.lights.new("Sun", type="SUN")
    sun_data.energy = 2.6
    sun_data.color = (1.0, 0.76, 0.5)
    sun_data.angle = 0.35
    sun = bpy.data.objects.new("Sun", sun_data)
    bpy.context.collection.objects.link(sun)
    sun.rotation_euler = (0.42, 0.12, 0.62)

    cam_data = bpy.data.cameras.new("Cam")
    cam_data.lens = 38
    cam = bpy.data.objects.new("Cam", cam_data)
    bpy.context.collection.objects.link(cam)
    cam.location = (10.6, -9.6, 5.4)
    from mathutils import Vector
    direction = Vector((0.6, 1.4, 1.6)) - cam.location
    cam.rotation_euler = direction.to_track_quat("-Z", "Y").to_euler()

    bpy.context.scene.camera = cam
    bpy.context.scene.render.engine = "CYCLES"
    bpy.context.scene.cycles.device = "CPU"
    bpy.context.scene.cycles.samples = 24
    bpy.context.scene.cycles.use_denoising = False
    bpy.context.scene.render.resolution_x = 960
    bpy.context.scene.render.resolution_y = 540
    bpy.context.scene.render.resolution_percentage = 100
    bpy.context.scene.render.filepath = OUT.replace(".glb", ".png")
    bpy.ops.render.render(write_still=True)
    print("PNG preview written")
