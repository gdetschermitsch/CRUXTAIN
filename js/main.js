// ========================
// CruxTain Products JS
// ========================

// Products object: Add new products here
const productsData = {
    /* ===== Blender 3.6 Addons ===== */
        // Icon Maker (FIRST PRODUCT)
    triIconMaker: {
        title: "Tri-IconMaker",
        description: "The Tri-IconMaker addon for Blender 3.6, developed by CRUX-TAIN™, provides a streamlined interface for creating, managing, and using custom icons within Blender’s UI. It maintains a dedicated folder for storing PNG icons and a preview collection for efficient access. Users can import new icons, rename existing ones, and permanently delete unwanted icons through intuitive operators. The addon automatically loads and unloads icons as needed, ensuring that changes are reflected in Blender’s interface. All icons are displayed in a sidebar panel in the 3D View, where users can quickly manage their library and apply custom icons to their own addons using the custom_icon helper function. This makes it a centralized solution for integrating personalized visuals into Blender’s workflow..",
        image: "assets/images/triIconMaker.jpeg",
        gif: "assets/gifs/triIconMaker.gif",
        link: "#"
    },

    // Edit Tools
    triEditTools: {
        title: "Tri-EditTools",
        description: "The Tri-EditTools add-on for Blender 3.6, authored by CRUX-TAIN™, provides a comprehensive suite of mesh editing utilities all accessible from a single N-panel in the 3D View. It consolidates common edit mode operations, including selection tools (box select, edge loops/rings, random, intersecting, loose geometry, interior faces, faces by sides), mesh cleanup tools (merge by distance, mark/clear seams and sharp edges, recalculate normals, clear UVs, fix flipped normals), and face/geometry modification operators (fill holes, poke faces, tris-to-quads conversion, subdivide, separate by selection, grid fill, and bridge loops). Additional tools include mirrored selection across axes, measurement, annotation, loop cut, and knife operations. The add-on also features a Hole Manager panel to navigate, select, and manage mesh holes efficiently. It integrates optional custom icons for a visually organized interface and is designed to streamline repetitive edit-mode tasks, making it a powerful utility for mesh modeling workflow optimization.",
        image: "assets/images/triEditTools.jpeg",
        gif: "assets/gifs/triEditTools.gif",
        link: "#"
    },
    triCarver: {
        title: "Tri-Carver",
        description: "The Tri-Carver add-on for Blender 3.6, authored by CRUX-TAIN™, is a mesh editing tool that enables users to apply Boolean Difference operations directly in Edit Mode using a selected carver object. It provides an operator to perform the Boolean difference on the active object while optionally hiding or deleting the carver after application, configurable through persistent add-on preferences. The add-on includes a dedicated UI panel under the TriEditTools sidebar for easy access, displaying a toggle for the hide/delete behavior and a button to execute the Boolean operation. Tri-Carver streamlines non-destructive mesh carving workflows by allowing quick subtraction of complex shapes without leaving Edit Mode, and integrates custom icons if available.",
        image: "assets/images/triCarver.jpeg",
        gif: "assets/gifs/triCarver.gif",
        link: "#"
    },

    // Object Tools
    triCombine: {
        title: "Tri-Combine",
        description: "The Tri-Carver add-on for Blender 3.6 streamlines non-destructive mesh carving workflows by providing a set of specialized operators that allow users to quickly subtract, cut, and manipulate complex shapes directly in Edit Mode. Its operators enable precise control over carving operations without leaving the editing context, making complex mesh modifications faster and more efficient.",
        image: "assets/images/triCombine.jpeg",
        gif: "assets/gifs/triCombine.gif",
        link: "#"
    },
    triCurserTools: {
        title: "Tri-CurserTools",
        description: "Tri-Cursor Tools gives Blender 3.6 a compact little command center for anything involving the 3D cursor and object transforms. It lets you snap the cursor to the world origin, to a selection, or move selected objects straight to the cursor with one click. It also handles object housekeeping by applying location, rotation, and scale instantly, and gives quick access to origin management—either snapping an object’s origin to the cursor or recentering it on its own geometry. All of this is wrapped into a clean Object-Mode-only panel inside the N-sidebar under Tri-ObjectTools, keeping cursor and transform workflow fast, tidy, and pleasantly frictionless—almost like giving Blender a little spatial teleporter console.",
        image: "assets/images/triCurserTools.jpeg",
        gif: "assets/gifs/triCurserTools.gif",
        link: "#"
    },
    triModifierLink: {
        title: "Tri-ModifierLink",
        description: "Tri-ModifierLink is built to spare you the tedium of recreating modifier stacks by hand. It lets you pick any object in your scene that already has modifiers and copy either its entire stack or a single chosen modifier onto another compatible object. The add-on automatically filters out invalid targets, handles all safe transferable properties, and reports exactly what it applied. Everything lives neatly in the Tri-ObjectTools sidebar: choose a source, choose a target, select “Link All Modifiers” or pick one modifier from a dropdown and transfer it instantly. It’s essentially a fast, clean way to propagate complex setups across multiple objects without touching the modifier panel, keeping your workflow nimble and your scene consistent.",
        image: "assets/images/triModifierLink.jpeg",
        gif: "assets/gifs/triModifierLink.gif",
        link: "#"
    },
    triPBSDF: {
        title: "Tri-PBSDF",
        description: "Tri-PBSDF is a material-tuning add-on built to give Blender 3.6 users immediate, hands-on control over Principled BSDF settings without the usual node-tree digging. It adds live-updating sliders for specular, roughness, emission, alpha, and emission color, while also enabling optional linking of image texture nodes directly into the shader’s emission and alpha inputs. It includes a one-click bump-chain generator that automatically builds and connects a ColorRamp → Bump → Normal pipeline from any available image texture. The add-on provides quick-toggle operators for backface culling, screen-space refraction, and alpha-blend material modes, plus convenient operators to apply emission and alpha texture nodes. Everything is packed into an N-Panel interface under Tri-ObjectTools, offering a streamlined workflow for artists who want to shape materials quickly while keeping node graphs clean and automatically configured.",
        image: "assets/images/triPBSDF.jpeg",
        gif: "assets/gifs/triPBSDF.gif",
        link: "#"
    },
    triUV: {
        title: "Tri-UV",
        description: "Tri-UV is a compact UV-tooling addon for Blender 3.6 that automatically unwraps any mesh into a clean six-tile orthographic UV layout, giving each side of the object its own equal, non-overlapping UV island. It can also generate a UV-Grid debug material on the fly, complete with a procedural UV-grid texture wired directly into a fresh Principled BSDF node setup. For cleanup, it includes a one-click UV clearing operator that wipes all UV maps from the selected mesh, although that feature relies on Tri-EditTools being installed. The addon lives inside the Tri-ObjectTools panel and uses custom icons from Tri-IconMaker when available, giving artists a fast, structured way to unwrap models into predictable tile regions and quickly preview stretching or distortion through the generated UV grid.",
        image: "assets/images/triUV.jpeg",
        gif: "assets/gifs/triUV.gif",
        link: "#"
    },

    // Texture Tools
    triStamp: {
        title: "Tri-Stamp",
        description: "ri-Stamp is a texture-painting companion built to turn any PNG into a fully formed Blender brush, complete with size, rotation, falloff, and placement controls. It lets you load or swap PNGs on the fly, generate new brushes with custom names, duplicate or delete existing brushes, and instantly assign them as the active tool. The add-on includes fine-tuning tools for hue, saturation, brightness, and contrast, applied directly to the source image so you can sculpt the exact look of a stamp without leaving Blender. Everything sits neatly inside the Tri-TextureTools N-panel, giving artists a smooth workflow for creating, managing, and refining PNG-based brushes during texture-paint sessions.",
        image: "assets/images/triStamp.jpeg",
        gif: "assets/gifs/triStamp.gif",
        link: "#"
    },
    triEasyNormal: {
        title: "Tri-EasyNormal",
        description: "The Tri-EasyNormal add-on for Blender 3.6 is a streamlined tool for converting grayscale height maps into normal maps with real-time previews and adjustment controls. It features a Grayscale Manager that allows users to load PNG height maps, tweak contrast and lightness, and invert the grayscale for customized results. The Normal Map Manager generates normal maps from the adjusted grayscale images, offering live updates, strength control, and options to invert the Z-axis or green channel to match different engine conventions (like Unity DX11). All previews are displayed directly in Blender’s Image Editor, and changes can be updated without reloading the source image, giving users a fast, iterative workflow for texture creation. The interface is fully integrated into the 3D View sidebar under Tri-TextureTools, providing a clear, two-section layout for grayscale adjustments and normal map generation.",
        image: "assets/images/triEasyNormal.jpeg",
        gif: "assets/gifs/triEasyNormal.gif",
        link: "#"
    },

    // Animation Tools
    triAniCat: {
        title: "Tri-AniCat",
        description: "The Tri-AniCat™ (Beta 6) Blender 3.6 add-on is a procedural FK animation tool designed for detailed, per-axis control of armature bones. It allows users to create custom bone categories in Edit Mode and assign selected bones to them for targeted animation. In Pose Mode, the add-on generates procedural motion with adjustable amplitude, frequency, and phase along each axis, supporting motion types like sine, pendulum, and noise. Animations can be phase-cascaded across bones, baked into actions (including cyclic loops), and previewed live in the timeline. The UI offers intuitive panels for managing categories, configuring motion parameters, starting/stopping live previews, and baking the procedural animation into either new or existing actions, making it a flexible tool for both quick previews and finalized FK animation workflows.",
        image: "assets/images/triAniCat.jpeg",
        gif: "assets/gifs/triAniCat.gif",
        link: "#"
    },
    triBoneSet: {
        title: "Tri-BoneSet",
        description: "The Tri-BoneSet Blender 3.6 addon is a comprehensive rigging tool designed to streamline bone creation and armature setup. It allows users to create a root bone easily and then extrude new bones from either the base or tip of an existing parent bone. Each new bone can be assigned a custom name, and its tip position can be precisely adjusted using local X, Y, and Z transforms. The addon provides a user-friendly interface in the 3D Viewport sidebar under Tri-AnimTools, with dedicated panels for root creation, bone extrusion, and direct control over tail positioning. Additionally, it includes automatic syncing of bone tail transforms in real-time while editing, simplifying the rigging workflow and reducing manual adjustments. Custom icons enhance visual clarity, making the rigging process faster and more intuitive.",
        image: "assets/images/triBoneSet.jpeg",
        gif: "assets/gifs/triBoneSet.gif",
        link: "#"
    },
    triIK: {
        title: "Tri-IK",
        description: "The Tri-IK Blender 3.6 add-on by CRUX-TAIN™ provides a comprehensive suite of rigging tools focused on bone parenting and inverse kinematics (IK) workflows. It allows users to easily clear or assign parent relationships between bones, and to create or edit IK constraints with live updates. Tri-IK supports specifying IK targets, control bones, pole targets, chain lengths, and options for tail usage and stretch. The add-on also exposes dynamic, real-time editing of IK properties, including influence, chain count, pole angles, min/max rotation limits, locks, and stiffness per axis. Its user interface is fully integrated into the 3D View sidebar under “Tri-AnimTools,” providing intuitive access to both constraint creation and detailed IK parameter adjustment without leaving the viewport. This makes it particularly efficient for animators and riggers working with complex armatures.",
        image: "assets/images/triIK.jpeg",
        gif: "assets/gifs/triIK.gif",
        link: "#"
    },
    triSKM: {
        title: "Tri-SKM",
        description: "The Tri-SKM add-on for Blender 3.6 is a streamlined N-panel tool for managing shape keys and their associated animations. It allows users to create a Basis shape key for mesh objects, add and name new shape keys, and delete the currently active key directly from the UI. The add-on also supports creating Shape Key Actions, linking them automatically to the active shape key for animation workflows. Users can adjust the active shape key value and its min/max sliders, set relative keys, and manage key names, all within the panel. Additionally, the panel includes a timeline frame controller that updates the scene’s current frame in real time. Custom icons enhance usability, and all operations support undo and registration in Blender’s interface. Overall, it provides a compact, integrated workflow for shape key animation management without leaving the 3D Viewport.",
        image: "assets/images/triSKM.jpeg",
        gif: "assets/gifs/triSKM.gif",
        link: "#"
    },

    // Generation Tools
    triBluePrint: {
        title: "Tri-BluePrint",
        description: "The Tri-BluePrint Blender 3.6 add-on by CRUX-TAIN™ allows users to generate object layouts directly from PNG blueprint images by mapping colors to specific objects. It automatically detects unique colors in the blueprint and enables users to assign each color to a corresponding Blender object, supporting both full copies and linked duplicates to optimize memory usage. The add-on computes the centroid of all pixels of a given color and places the mapped objects accordingly, with customizable scaling in meters per pixel. Its UI provides an intuitive Blueprint Manager panel for selecting images, configuring object-color mappings, detecting colors, and generating the blueprint layout, streamlining complex scene creation based on visual reference images.",
        image: "assets/images/triBluePrint.jpeg",
        gif: "assets/gifs/triBluePrint.gif",
        link: "#"
    },
    triMazeGen: {
        title: "TRI-MazeGen",
        description: "The Tri-MazeGen addon for Blender 3.6 is a procedural mesh generator designed to create customizable mazes with a single-object workflow. It allows users to define maze dimensions, cell size, wall thickness, and wall height, and optionally include a floor, ceiling, and multi-height rooms. The addon supports generating naturalistic rooms within the maze, ensuring all rooms have openings. Users can interactively control settings through a dedicated sidebar panel, with live updates triggered whenever parameters change. The generated maze mesh is fully editable, either replacing an existing maze object or creating a new one, and the addon also provides a simple operator to remove the maze cleanly from the scene. Overall, it offers a flexible, all-in-one solution for creating and customizing 3D mazes directly in Blender.",
        image: "assets/images/triMazeGen.jpeg",
        gif: "assets/gifs/triMazeGen.gif",
        link: "#"
    },
    triSceneManagers: {
        title: "Tri-SceneManagers",
        description: "The Tri-SceneManagers add-on for Blender 3.6 provides a comprehensive suite of tools to manage all core scene data types directly from the 3D View sidebar under Tri-GenTools. It allows users to create, rename, delete, and select collections, objects, meshes, materials, and textures, streamlining scene organization and cleanup. Each manager features dynamic drop-down menus that automatically list existing items in the scene, with validation to prevent duplicate or empty names. Collection management supports linking new collections to parent collections or the scene root. Object and mesh management handle hierarchies, ensuring dependent objects are appropriately deleted. Material and texture tools can remove or rename items globally across all objects and node trees, maintaining scene integrity. The add-on integrates all functionality into a single, unified UI panel for rapid workflow control, reducing the need to navigate multiple Blender editors.",
        image: "assets/images/triSceneManagers.jpeg",
        gif: "assets/gifs/triSceneManagers.gif",
        link: "#"
    },
    triTeeGen: {
        title: "Tri-TreeGen",
        description: "The Tri-TreeGen Blender 3.6 add-on by CRUX-TAIN™ is a procedural tree generation tool that allows users to create complex, customizable trees directly in the 3D viewport. It features full control over trunk dimensions, crown branch hierarchy, branch count, length, tapering, and orientation, as well as randomization seeds for reproducible variation. The add-on supports straggler branches for natural asymmetry and enables dynamic leaf generation on both normal and tip edges, with adjustable density, scale, rotation randomness, and separate texture assignment for tip and root leaves. Trees are generated as skinned meshes with optional conversion to standard meshes, and the add-on includes a user-friendly N-panel interface in the 3D Viewport with clear sections for trunk, crown branches, stragglers, leaves, and general settings. Procedural logic ensures realistic branch placement, leaf orientation, and automated material/UV setup for leaf planes, providing artists with a versatile tool for creating stylized or realistic foliage.",
        image: "assets/images/triTreeGen.jpeg",
        gif: "assets/gifs/triTreeGen.gif",
        link: "#"
    },

    /* ===== UPBGE 3.6 Tools ===== */
    triAnimaterial: {
        title: "Tri-Animaterial",
        description: "The Tri-Animaterial add-on for Blender 3.6 (UPBGE) provides a streamlined workflow for converting GIFs into UV-animated materials and integrating them into the game engine. It allows users to select a GIF file, automatically bake it into a spritesheet, and apply it as a material to selected mesh objects. The add-on generates animation keyframes based on the GIF frame durations and supports setting the scene’s frames-per-second with presets or custom values. Additionally, it offers a utility to quickly add default UPBGE logic bricks—including an Always sensor, an AND controller, and an Action actuator—linking them to any material animation. All features are accessible through a dedicated panel in the 3D View N-Panel, making GIF animation setup, FPS configuration, and game logic preparation fast and intuitive.",
        image: "assets/images/triAnimaterial.jpeg",
        gif: "assets/gifs/triAnimaterial.gif",
        link: "#"
    },
    triBrickBox: {
        title: "Tri-BrickBox",
        description: "The Tri-BrickBox add-on for Blender 3.6 (UPBGE) provides a streamlined interface in the N-panel for managing logic bricks on selected objects. It allows users to add sensors, controllers, and actuators directly from the UI, with customizable names and types for each. Beyond creation, the add-on enables linking these logic bricks—connecting sensors to controllers and controllers to actuators—without manually wiring them in the logic editor. The interface updates dynamically based on the active object, showing available bricks for linking. This tool essentially centralizes logic brick management, making the process faster, more intuitive, and accessible entirely from the 3D view sidebar.",
        image: "assets/images/triBrickBox.jpeg",
        gif: "assets/gifs/triBrickBox.gif",
        link: "#"
    },
    triOBJPROP: {
        title: "Tri-OBJPROP",
        description: "The Tri-Obj Prop Manager is a comprehensive UPBGE 3.6 add-on designed to streamline the management of logic-brick game properties directly within Blender’s 3D View Sidebar. It provides an intuitive interface for adding, editing, removing, toggling, and reordering runtime properties on objects, supporting multiple data types including Boolean, Integer, Float, String, and Timer. Users can quickly create new properties, select existing ones to populate editable fields, toggle Boolean values with a single click, and move properties up or down in the list to organize them efficiently. The add-on also features a dedicated panel that displays all object properties in a clear, interactive layout, complete with custom icons for actions like add, delete, apply, and toggle, enabling full property control without leaving the N-panel workflow.",
        image: "assets/images/triOBJPROP.jpeg",
        gif: "assets/gifs/triOBJPROP.gif",
        link: "#"
    },
    triParticle: {
        title: "Tri-Particle",
        description: "The Tri-Particle add-on for Blender 3.6 is a bone-driven procedural particle system that converts each bone of an armature into a quad particle, allowing for highly controllable 3D particle grids. It supports configurable grid dimensions and bounding boxes, with adjustable per-particle cell sizes. The system provides dynamic effects including spiral rotations (local, global, or combined), pulsing scales, and optional cloud-style random jitter. Users can assign materials to the particle mesh, and all procedural motion can be baked to a single animation action for efficient playback or export. The add-on automatically generates the armature, mesh, vertex groups, and armature modifier, ensuring each quad is driven by its corresponding bone, while a real-time frame-change handler updates the particle positions, rotations, and scales. The intuitive UI in the 3D View sidebar allows full control of all system properties, including effect parameters and frame scrubbing, with seamless integration into animation workflows.",
        image: "assets/images/triParticle.jpeg",
        gif: "assets/gifs/triParticle.gif",
        link: "#"
    },

    /* ===== Theology, Philosophy & Story Works ===== */

    yhwhLogic: {
        title: "YHWH LOGIC",
        description: "Core metaphysical system defining the Heavenly Logic of The trinity and the principles of Seven.",
        image: "assets/images/yhwhLogic.jpeg",
        gif: "assets/gifs/yhwhLogic.gif",
        link: "https://archive.org/details/God_logic_1"
    },

    sevenSealsWitness: {
        title: "7 Seals Witness",
        description: "A structured witness of the seven pillars of divine logic. And examination of the consequences that follow from knowing Unity, Distinction and Relation.",
        image: "assets/images/sevenSealsWitness.jpeg",
        gif: "assets/gifs/sevenSealsWitness.gif",
        link: "https://archive.org/details/God_logic_2"
    },

    triLiteralization: {
        title: "Tri Literal Ization – The Heavenly Root Structure Of All Things",
        description: "A structural analysis of creation’s triadic root logic: Unity, Distinction, Relation.",
        image: "assets/images/triLiteralization.jpeg",
        gif: "assets/gifs/triLiteralization.gif",
        link: "https://archive.org/details/God_logic_3"
    },

    godLogic: {
        title: "God Logic",
        description: "An exploration of divine logic, order, and metaphysical structure, tailored for the critical thinkers and laymen..",
        image: "assets/images/godLogic.jpeg",
        gif: "assets/gifs/godLogic.gif",
        link: "https://archive.org/details/God_logic_4"
    },

    theologyPhilosophyStories: {
        title: "Theology, Philosophy & Stories",
        description: "In a world loaded with philosophical confusion, theological distortion, and made up stories, this book of ongoing entries offers clarity to illusion. Built on the foundation of the YHWH Logic 7-Seal Framework, this diagnostic guide exposes 80 of the most influential metaphysical and ideological systems in history..",
        image: "assets/images/theologyPhilosophyStories.jpeg",
        gif: "assets/gifs/theologyPhilosophyStories.gif",
        link: "https://archive.org/details/God_logic_Entries"
    }
};



// Get query param from URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Display single product dynamically
function displayProduct() {
    const productId = getQueryParam('product');
    const container = document.getElementById('productDisplay');

    if (productId && productsData[productId]) {
        const prod = productsData[productId];
        container.innerHTML = `
            <h2>${prod.title}</h2>
            <div class="product-media">
                <img src="${prod.image}" alt="${prod.title} Image" width="400">
                <img src="${prod.gif}" alt="${prod.title} GIF" width="400">
            </div>
            <p>${prod.description}</p>
            <a href="${prod.link}" class="btn">Download / Learn More</a>
        `;
    } else {
        container.innerHTML = `<p>Please select a product.</p>`;
    }
}

// Optional: Generate all products thumbnails
function generateAllProducts() {
    const container = document.getElementById('productsContainer');
    if (!container) return;

    container.innerHTML = ''; // clear container
    for (const key in productsData) {
        const prod = productsData[key];
        container.innerHTML += `
            <div class="product-card">
                <h3>${prod.title}</h3>
                <img src="${prod.image}" alt="${prod.title}" width="200">
                <a href="products.html?product=${key}" class="btn">View Product</a>
            </div>
        `;
    }
}

// Initialize
if (document.getElementById('productDisplay')) {
    displayProduct();
}
generateAllProducts();
