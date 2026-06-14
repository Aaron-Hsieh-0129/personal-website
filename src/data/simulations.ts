export type SimulationGroup =
  | "GPUVVM"
  | "Cubed-Sphere Shallow Water"
  | "2D VVM / QCM";

export type SimulationCase = {
  id: string;
  title: string;
  group: SimulationGroup;
  model: string;
  embedUrl: string;
  source: "GPUVVM gallery" | "models-web";
  note: string;
};

// Add new cases here. Keep the list ordered newest project -> older project.
// Prefer stable online embeds, e.g. YouTube embed URLs from published docs.
export const simulationCases: SimulationCase[] = [
  {
    id: "gpuvvm-taiwan",
    title: "TaiwanVVM topography / land / physics",
    group: "GPUVVM",
    model: "GPUVVM",
    embedUrl: "https://www.youtube.com/embed/6wFKTAkBJKw",
    source: "GPUVVM gallery",
    note: "Taiwan is used as a complex-topography stress test for terrain-aware cloud-resolving simulations.",
  },
  {
    id: "gpuvvm-rce-300k",
    title: "RCE self-aggregation, SST 300 K",
    group: "GPUVVM",
    model: "GPUVVM",
    embedUrl: "https://www.youtube.com/embed/QMaB25El1H4",
    source: "GPUVVM gallery",
    note: "Radiative-convective equilibrium experiment for testing moist convection and aggregation behavior.",
  },
  {
    id: "gpuvvm-rcemip-305k",
    title: "RCEMIP RCE, SST 305 K",
    group: "GPUVVM",
    model: "GPUVVM",
    embedUrl: "https://www.youtube.com/embed/w2JkpAE6j8U",
    source: "GPUVVM gallery",
    note: "RCEMIP-style configuration for checking model behavior in a warmer RCE regime.",
  },
  {
    id: "gpuvvm-3dbubble",
    title: "3D warm bubble",
    group: "GPUVVM",
    model: "GPUVVM dynamics benchmark",
    embedUrl: "https://www.youtube.com/embed/gSi1ukT0mXw",
    source: "GPUVVM gallery",
    note: "Three-dimensional warm-bubble dynamics for dynamical-core inspection.",
  },
  {
    id: "gpuvvm-2dbubble",
    title: "2D warm bubble",
    group: "GPUVVM",
    model: "GPUVVM dynamics benchmark",
    embedUrl: "https://www.youtube.com/embed/zmWaabfmZ8Y",
    source: "GPUVVM gallery",
    note: "Two-dimensional bubble case used for fast idealized checks.",
  },
  {
    id: "gpuvvm-advection-u",
    title: "Advection u",
    group: "GPUVVM",
    model: "GPUVVM dynamics benchmark",
    embedUrl: "https://www.youtube.com/embed/7qR-_FeTCc8",
    source: "GPUVVM gallery",
    note: "Regression-aligned dynamics benchmark isolating advection behavior.",
  },
  {
    id: "gpuvvm-advection-v",
    title: "Advection v",
    group: "GPUVVM",
    model: "GPUVVM dynamics benchmark",
    embedUrl: "https://www.youtube.com/embed/4q6sFE4QlrA",
    source: "GPUVVM gallery",
    note: "Regression-aligned dynamics benchmark for the v component.",
  },
  {
    id: "gpuvvm-advection-w",
    title: "Advection w",
    group: "GPUVVM",
    model: "GPUVVM dynamics benchmark",
    embedUrl: "https://www.youtube.com/embed/zaMPpXLgrQY",
    source: "GPUVVM gallery",
    note: "Regression-aligned dynamics benchmark for vertical motion.",
  },
  {
    id: "gpuvvm-stretching",
    title: "Stretching term",
    group: "GPUVVM",
    model: "GPUVVM dynamics benchmark",
    embedUrl: "https://www.youtube.com/embed/Feoa3RW3als",
    source: "GPUVVM gallery",
    note: "Idealized test for vorticity stretching behavior.",
  },
  {
    id: "gpuvvm-twisting",
    title: "Twisting term",
    group: "GPUVVM",
    model: "GPUVVM dynamics benchmark",
    embedUrl: "https://www.youtube.com/embed/ZtVoWcYPmtA",
    source: "GPUVVM gallery",
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
