export type Interest = {
  title: string;
  description: string;
};

export const interests: Interest[] = [
  {
    title: "Cloud-resolving atmospheric modeling",
    description:
      "Developing and analyzing high-resolution simulations that resolve convective dynamics and cloud-scale processes."
  },
  {
    title: "GPU/HPC acceleration for geophysical models",
    description:
      "Using GPU and parallel-computing methods to make atmospheric simulations feasible at scientifically useful resolutions."
  },
  {
    title: "Land-atmosphere interaction and surface flux coupling",
    description:
      "Connecting surface energy, moisture, and momentum exchange with cloud-resolving model dynamics."
  },
  {
    title: "Radiation, microphysics, and model-physics integration",
    description:
      "Studying how physical-process modules interact with resolved dynamics in cloud-resolving model experiments."
  },
  {
    title: "Numerical methods for atmospheric dynamics",
    description:
      "Studying discretization, dynamical-core structure, and solver behavior in atmospheric and geophysical models."
  },
  {
    title: "Complex topography and high-resolution regional simulation",
    description:
      "Using complex-terrain cases, including Taiwan, to examine terrain, flow, and precipitation-related model behavior."
  },
  {
    title: "Model verification, regression tests, and reproducible workflows",
    description:
      "Building comparison workflows and diagnostics that make model changes easier to evaluate and reproduce."
  }
];
