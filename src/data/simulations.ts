export type SimulationGroup =
  | "VVMex"
  | "Cubed-Sphere Shallow Water"
  | "2D VVM / QCM";

export type SimulationCase = {
  id: string;
  title: string;
  group: SimulationGroup;
  model: string;
  embedUrl: string;
  source: "VVMex gallery" | "models-web";
  note: string;
};

// Add new cases here. Keep the list ordered newest project -> older project.
// Prefer stable online embeds, e.g. YouTube embed URLs from published docs.
export const simulationCases: SimulationCase[] = [
  {
    id: "vvmex-taiwan",
    title: "TaiwanVVM — topography, land, and physics",
    group: "VVMex",
    model: "VVMex full-physics LES",
    embedUrl: "https://www.youtube.com/embed/6wFKTAkBJKw",
    source: "VVMex gallery",
    note: "A 2048 × 2048 × 70 complex-terrain case coupling dynamics, P3 microphysics, RRTMGP radiation, surface exchange, and the Noah land model.",
  },
  {
    id: "vvmex-rce-300k",
    title: "RCE self-aggregation (SST 300 K)",
    group: "VVMex",
    model: "VVMex full-physics LES",
    embedUrl: "https://www.youtube.com/embed/NccMcuHnp5I",
    source: "VVMex gallery",
    note: "A 100-day weakly forced radiative-convective-equilibrium experiment testing coupled energy and water balances and convective aggregation.",
  },
  {
    id: "vvmex-rcemip-305k",
    title: "RCE self-aggregation (RCEMIP, SST 305 K)",
    group: "VVMex",
    model: "VVMex full-physics LES",
    embedUrl: "https://www.youtube.com/embed/w2JkpAE6j8U",
    source: "VVMex gallery",
    note: "A 200-day RCEMIP-style configuration for evaluating moist convection and self-aggregation in a warmer RCE regime.",
  },
  {
    id: "vvmex-3dbubble",
    title: "3D bubble (no physics)",
    group: "VVMex",
    model: "VVMex dynamics benchmark",
    embedUrl: "https://www.youtube.com/embed/gSi1ukT0mXw",
    source: "VVMex gallery",
    note: "Three-dimensional warm-bubble dynamics for inspecting the dry dynamical core.",
  },
  {
    id: "vvmex-2dbubble",
    title: "2D bubble (no physics)",
    group: "VVMex",
    model: "VVMex dynamics benchmark",
    embedUrl: "https://www.youtube.com/embed/ulDRzJutGXw",
    source: "VVMex gallery",
    note: "A regression-aligned two-dimensional warm-bubble case used for fast dry-dynamics checks.",
  },
  {
    id: "vvmex-advection-u",
    title: "Advection u",
    group: "VVMex",
    model: "VVMex dynamics benchmark",
    embedUrl: "https://www.youtube.com/embed/7qR-_FeTCc8",
    source: "VVMex gallery",
    note: "Regression-aligned dynamics benchmark isolating advection behavior.",
  },
  {
    id: "vvmex-advection-v",
    title: "Advection v",
    group: "VVMex",
    model: "VVMex dynamics benchmark",
    embedUrl: "https://www.youtube.com/embed/4q6sFE4QlrA",
    source: "VVMex gallery",
    note: "Regression-aligned dynamics benchmark for the v component.",
  },
  {
    id: "vvmex-advection-w",
    title: "Advection w",
    group: "VVMex",
    model: "VVMex dynamics benchmark",
    embedUrl: "https://www.youtube.com/embed/zaMPpXLgrQY",
    source: "VVMex gallery",
    note: "Regression-aligned dynamics benchmark for vertical motion.",
  },
  {
    id: "vvmex-stretching",
    title: "Stretching term",
    group: "VVMex",
    model: "VVMex dynamics benchmark",
    embedUrl: "https://www.youtube.com/embed/Feoa3RW3als",
    source: "VVMex gallery",
    note: "Idealized test for vorticity stretching behavior.",
  },
  {
    id: "vvmex-twisting",
    title: "Twisting term",
    group: "VVMex",
    model: "VVMex dynamics benchmark",
    embedUrl: "https://www.youtube.com/embed/ZtVoWcYPmtA",
    source: "VVMex gallery",
    note: "Idealized test for vorticity twisting behavior.",
  },
  {
    id: "csswm-advection",
    title: "Cosine Bubble Advection",
    group: "Cubed-Sphere Shallow Water",
    model: "Cubed-Sphere Shallow Water Model",
    embedUrl: "https://www.youtube.com/embed/5Gu_z_GR79I",
    source: "models-web",
    note: "Advection test across weak singularity point. ",
  },
  {
    id: "csswm-geostrophic",
    title: "Geostrophic adjustment",
    group: "Cubed-Sphere Shallow Water",
    model: "Cubed-Sphere Shallow Water Model",
    embedUrl: "https://www.youtube.com/embed/CUv1pX163pQ?si=0RtyKSLCAqxkcRol",
    source: "models-web",
    note: "Spherical shallow-water test for geostrophic balance on a cubed-sphere grid.",
  },
  {
    id: "csswm-barotropic",
    title: "Barotropic instability",
    group: "Cubed-Sphere Shallow Water",
    model: "Cubed-Sphere Shallow Water Model",
    embedUrl: "https://www.youtube.com/embed/zSepHC5psAc?si=LopnoJTbn2na77Tl",
    source: "models-web",
    note: "A dynamical-core test for flow evolution on cubed-sphere geometry.",
  },
  {
    id: "csswm-mountain",
    title: "Mountain test",
    group: "Cubed-Sphere Shallow Water",
    model: "Cubed-Sphere Shallow Water Model",
    embedUrl: "https://www.youtube.com/embed/G4hVWNGEAEc?si=TuHxLaTYmQq_q3_m",
    source: "models-web",
    note: "Terrain-related shallow-water response in a simplified spherical model.",
  },
  {
    id: "csswm-wave",
    title: "Wave propagation",
    group: "Cubed-Sphere Shallow Water",
    model: "Cubed-Sphere Shallow Water Model",
    embedUrl: "https://www.youtube.com/embed/CRdPHsxJojw?si=E7D-g2nmLixebLkd",
    source: "models-web",
    note: "Wave propagation on a spherical grid.",
  },
  {
    id: "2dvvm-advection",
    title: "2D VVM advection experiment",
    group: "2D VVM / QCM",
    model: "2D Vector Vorticity Model",
    embedUrl: "https://www.youtube.com/embed/Vi9EUY5r9vM?si=35pBzObnGxkzUqfB",
    source: "models-web",
    note: "Older 2D cloud-resolving setup for testing vorticity-equation model behavior.",
  },
  {
    id: "2dvvm-water",
    title: "Moist 2D VVM case",
    group: "2D VVM / QCM",
    model: "2D Vector Vorticity Model",
    embedUrl: "https://www.youtube.com/embed/VwtlIBtG95A",
    source: "models-web",
    note: "Moist 2D model case before moving to larger cloud-resolving systems.",
  },
  {
    id: "2dvvm-shear",
    title: "2D VVM shear case",
    group: "2D VVM / QCM",
    model: "2D Vector Vorticity Model",
    embedUrl: "https://www.youtube.com/embed/rtyHQa--FCo?si=ftHgSs6vAIGMVtkd",
    source: "models-web",
    note: "Idealized shear environment for comparing convective structure.",
  },
  {
    id: "2dqcm-dry",
    title: "2D quasi-compressible dry case",
    group: "2D VVM / QCM",
    model: "2D QCM",
    embedUrl: "https://www.youtube.com/embed/Wu-skqBpk1U?si=GEzT_-KgxRm4W0q6",
    source: "models-web",
    note: "Quasi-compressible comparison case for acoustic-wave treatment.",
  },
  {
    id: "2dqcm-water",
    title: "2D quasi-compressible moist case",
    group: "2D VVM / QCM",
    model: "2D QCM",
    embedUrl: "https://www.youtube.com/embed/3NeV51XtfBM?si=i_pEuro2cL5hTBcS",
    source: "models-web",
    note: "Moist quasi-compressible comparison experiment.",
  },
];

export const simulationGroups = Array.from(
  new Set(simulationCases.map((item) => item.group)),
);
