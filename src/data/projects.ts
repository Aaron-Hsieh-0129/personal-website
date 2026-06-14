export type ProjectLink = {
  label: string;
  url: string;
  kind: "code" | "docs" | "paper";
};

export type Project = {
  slug: string;
  title: string;
  shortTitle?: string;
  status: string;
  preprint?: {
    citation: string;
    doi: string;
    note: string;
  };
  summary: string;
  problem: string;
  approach: string;
  readiness: string;
  components: string[];
  tags: string[];
  links: ProjectLink[];
  media?: {
    label: string;
    url: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "gpuvvm",
    title: "GPUVVM — GPU-accelerated Vector Vorticity Model",
    shortTitle: "GPUVVM",
    status: "Primary current research",
    summary:
      "A cloud-resolving model development project for idealized convection, model-physics coupling, and complex-topography tests.",
    problem:
      "Cloud-resolving simulations become expensive when terrain, surface exchange, microphysics, and radiation are included.",
    approach:
      "I am developing a Kokkos/C++ Vector Vorticity Model with MPI, CUDA/Kokkos execution, ADIOS2/NetCDF I/O, P3 microphysics, RRTMGP radiation, Noah LSM, and topography support.",
    readiness:
      "This shows preparation for atmospheric-model research that needs numerical implementation, physical-process coupling, diagnostics, and GPU/HPC tools.",
    components: [
      "Vector Vorticity Model dynamics",
      "MPI domain decomposition",
      "Kokkos/CUDA execution",
      "ADIOS2 and NetCDF I/O",
      "P3 microphysics",
      "RRTMGP radiation",
      "Noah land surface coupling",
      "topography support",
      "regression tests",
    ],
    tags: [
      "cloud-resolving modeling",
      "VVM",
      "complex topography",
      "land-atmosphere coupling",
      "P3 microphysics",
      "RRTMGP radiation",
      "Noah LSM",
      "C++",
      "Kokkos",
      "CUDA",
      "MPI",
      "ADIOS2",
      "NetCDF",
    ],
    links: [
      {
        label: "GPUVVM GitHub repository",
        url: "https://github.com/Aaron-Hsieh-0129/VVM_GPU_CPP",
        kind: "code",
      },
      {
        label: "GPUVVM documentation and simulation gallery",
        url: "https://aaron-hsieh-0129.github.io/VVM_GPU_CPP/",
        kind: "docs",
      },
    ],
  },
  {
    slug: "adaptive-convection-circulation-coupling",
    title: "Next-Generation Adaptive Convection-Circulation Coupling Framework",
    shortTitle: "NextACC",
    status: "M.S. thesis and preprint",
    preprint: {
      citation:
        "C.-W. Hsieh and C.-M. Wu. Next-Generation Adaptive Convection-Circulation Coupling Framework. ESSOAr Preprint, 2025.",
      doi: "10.22541/essoar.174051759.91277474",
      note: "Listed as a preprint and thesis-related work; not presented here as peer-reviewed.",
    },
    summary:
      "A coupled-model framework for asking how cloud-scale convection and large-scale circulation interact across temporal and spatial scales.",
    problem:
      "Cloud-scale convection and large-scale circulation interact across different time and space scales.",
    approach:
      "NextACC couples a cubed-sphere shallow-water model with embedded 2D vector-vorticity cloud-resolving models in C++.",
    readiness:
      "This shows experience designing an idealized model around a scientific question and interpreting convection-circulation behavior.",
    components: [
      "cubed-sphere shallow-water model",
      "embedded 2D VVM",
      "multiscale coupling",
      "adaptive convection-circulation framework",
      "idealized numerical experiments",
      "ESSOAr preprint",
    ],
    tags: [
      "convection-circulation coupling",
      "multiscale dynamics",
      "cloud-resolving model",
      "shallow-water model",
      "VVM",
      "C++",
      "numerical modeling",
    ],
    links: [
      {
        label: "NextACC GitHub repository",
        url: "https://github.com/Aaron-Hsieh-0129/Next-Genegration-Adaptive-Convection-Circulation-Coupling-Framework",
        kind: "code",
      },
      {
        label: "NextACC model website",
        url: "https://aaron-hsieh-0129.github.io/models-web/",
        kind: "docs",
      },
    ],
    media: [
      {
        label: "Model website with coupled-model examples",
        url: "https://aaron-hsieh-0129.github.io/models-web/",
      },
    ],
  },
  {
    slug: "cubed-sphere-shallow-water",
    title: "Cubed-Sphere Shallow Water Model",
    status: "Dynamical-core testbed",
    summary:
      "A C++ shallow-water model on cubed-sphere geometry for studying spherical dynamical-core numerics.",
    problem:
      "Global atmospheric models need stable flow representations on spherical grids.",
    approach:
      "I implemented a C++ cubed-sphere shallow-water model on an A-grid with test cases and visualization workflows.",
    readiness:
      "This demonstrates preparation in dynamical cores, spherical geometry, and idealized numerical tests.",
    components: [
      "shallow-water equations",
      "cubed-sphere geometry",
      "A-grid discretization",
      "dynamical-core test cases",
      "C++ implementation",
      "visualization workflow",
    ],
    tags: [
      "shallow-water equations",
      "cubed sphere",
      "dynamical core",
      "A-grid",
      "C++",
      "CMake",
      "numerical methods",
    ],
    links: [
      {
        label: "Cubed-Sphere Shallow Water Model repository",
        url: "https://github.com/Aaron-Hsieh-0129/Cubed-Sphere-Shallow-Water-Model-A-grid",
        kind: "code",
      },
      {
        label: "Cubed-sphere documentation site",
        url: "https://aaron-hsieh-0129.github.io/documentation-of-CSSWM/html/index.html",
        kind: "docs",
      },
    ],
    media: [
      {
        label: "Cubed-sphere examples in model website",
        url: "https://aaron-hsieh-0129.github.io/models-web/",
      },
    ],
  },
  {
    slug: "two-dimensional-cloud-resolving-model",
    title: "2D Cloud Resolving Model",
    status: "Foundational CRM development",
    summary:
      "2D Vector Vorticity and quasi-compressible cloud-resolving model work for studying thermal-bubble dynamics and model formulation.",
    problem:
      "Small cloud-resolving models isolate numerical formulation, acoustic-wave filtering, and moist convection.",
    approach:
      "The project includes a 2D Vector Vorticity Model and quasi-compressible experiments with C++ model code and documentation.",
    readiness:
      "This shows progression from simplified dynamical models toward larger cloud-resolving systems.",
    components: [
      "2D Vector Vorticity Model",
      "quasi-compressible model",
      "thermal-bubble experiments",
      "moist model tests",
      "GPU Poisson solver",
      "C++ implementation",
    ],
    tags: [
      "cloud-resolving model",
      "VVM",
      "quasi-compressible model",
      "thermal bubble",
      "C++",
      "GPU Poisson solver",
      "numerical methods",
    ],
    links: [
      {
        label: "2D Vector Vorticity Model repository",
        url: "https://github.com/Aaron-Hsieh-0129/2D-Vector-Vorticity-Model",
        kind: "code",
      },
      {
        label: "2D Vector Vorticity Model documentation",
        url: "https://aaron-hsieh-0129.github.io/2D-Vector-Vorticity-Model/index.html",
        kind: "docs",
      },
      {
        label: "Earlier 2D VVM / QCM warm-cell repository",
        url: "https://github.com/Aaron-Hsieh-0129/2021-summer-research",
        kind: "code",
      },
    ],
    media: [
      {
        label: "2D VVM and QCM examples in model website",
        url: "https://aaron-hsieh-0129.github.io/models-web/",
      },
    ],
  },
  {
    slug: "vvmtools",
    title: "VVMTools",
    status: "Model-analysis research tool",
    summary:
      "Python tools for extracting, processing, and diagnosing VVM 3D model output, especially NetCDF-based workflows.",
    problem:
      "Cloud-resolving simulations produce large, multidimensional output that must be subset, checked, and transformed before scientific analysis. Efficient diagnostics are necessary for interpreting model behavior and comparing experiments.",
    approach:
      "VVMTools provides Python utilities for NetCDF variable extraction, spatial and temporal subsetting, topographic variables from TOPO.nc, atmospheric profile parsing from fort.98, multiprocessing across time steps, and debugging/logging support.",
    readiness:
      "This project demonstrates the data-analysis side of atmospheric modeling: building reusable tools that connect simulation output to diagnostics, figures, and reproducible research workflows.",
    components: [
      "NetCDF extraction",
      "xarray workflows",
      "topographic variables",
      "profile parsing",
      "multiprocessing",
      "diagnostic automation",
    ],
    tags: [
      "Python",
      "xarray",
      "NumPy",
      "NetCDF",
      "multiprocessing",
      "topography",
      "atmospheric profiles",
      "model diagnostics",
    ],
    links: [
      {
        label: "VVMTools repository",
        url: "https://github.com/Aaron-Hsieh-0129/VVMTools",
        kind: "code",
      },
      {
        label: "VVMTools documentation site",
        url: "https://aaron-hsieh-0129.github.io/VVMTools/",
        kind: "docs",
      },
    ],
  },
  {
    slug: "precipitation-dnn-lstm",
    title: "Precipitation Prediction by DNN and LSTM",
    status: "Secondary data-driven meteorology project",
    summary:
      "A machine-learning project using DNN and LSTM models to predict precipitation in Taiwan from Central Weather Bureau observation data.",
    problem:
      "Taiwan precipitation is strongly affected by terrain, moisture, and synoptic-to-local variability. This project approached precipitation prediction as an observational-data problem rather than a physics-based simulation problem.",
    approach:
      "The project used Python/Jupyter workflows with DNN and LSTM models applied to Central Weather Bureau observation data. I present it as supplementary experience in data-driven meteorological analysis.",
    readiness:
      "This demonstrates familiarity with observational meteorological data, statistical learning workflows, and the strengths and limits of machine-learning approaches relative to physics-based atmospheric modeling.",
    components: [
      "Central Weather Bureau observations",
      "DNN model",
      "LSTM model",
      "Taiwan precipitation",
      "Jupyter workflow",
      "data-driven analysis",
    ],
    tags: [
      "Python",
      "Jupyter",
      "DNN",
      "LSTM",
      "precipitation",
      "Taiwan",
      "observational data",
    ],
    links: [
      {
        label: "Atmospheric statistics project repository",
        url: "https://github.com/Aaron-Hsieh-0129/atmospheric_statistics_project",
        kind: "code",
      },
    ],
  },
  {
    slug: "machine-learning-course",
    title: "Machine Learning Course",
    status: "Coursework and applied exercises",
    summary:
      "Coursework and applied machine-learning exercises relevant to scientific data analysis and model diagnostics.",
    problem:
      "Atmospheric research increasingly uses machine learning for pattern recognition, emulation, and data analysis, but these methods need to be understood as tools rather than replacements for physical interpretation.",
    approach:
      "The coursework repository contains machine-learning homework in Jupyter Notebook form. The CV also lists teaching assistant experience for Machine Learning at NTU in Spring 2024.",
    readiness:
      "This shows background in computational statistics and machine learning that can complement model diagnostics, observational analysis, and parameterization-oriented work.",
    components: [
      "machine-learning coursework",
      "Jupyter notebooks",
      "classification and regression exercises",
      "scientific data analysis",
      "teaching-assistant context",
    ],
    tags: [
      "machine learning",
      "coursework",
      "Jupyter Notebook",
      "Python",
      "scientific data analysis",
    ],
    links: [
      {
        label: "Machine learning coursework repository",
        url: "https://github.com/Aaron-Hsieh-0129/2021-spring-ntuml-hw",
        kind: "code",
      },
    ],
  },
  {
    slug: "timcom-omip-analysis",
    title: "TIMCOM / OMIP Data Analysis",
    status: "Geophysical-model output analysis",
    summary:
      "A Python data-analysis project processing TIMCOM ocean model output related to OMIP.",
    problem:
      "Geophysical model evaluation requires careful handling of large model output and comparison-oriented diagnostics. This project focused on ocean-model output rather than atmospheric model development.",
    approach:
      "The repository analyzes TIMCOM output intended for OMIP-related workflows using Python. It is included briefly as adjacent Earth-system modeling experience.",
    readiness:
      "This demonstrates transferable experience with geophysical-model data handling, diagnostic workflows, and the broader Earth-system modeling context around atmospheric research.",
    components: [
      "TIMCOM output",
      "OMIP-related workflow",
      "Python analysis",
      "geophysical diagnostics",
      "model-output processing",
    ],
    tags: [
      "Python",
      "TIMCOM",
      "ocean model output",
      "OMIP",
      "geophysical data analysis",
    ],
    links: [
      {
        label: "TIMCOM / OMIP analysis repository",
        url: "https://github.com/Aaron-Hsieh-0129/IONTU_OMIP_reserach",
        kind: "code",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
