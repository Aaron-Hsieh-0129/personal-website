export type CvSection = {
  title: string;
  items: string[];
};

export const cvSections: CvSection[] = [
  {
    title: "Education",
    items: [
      "M.S. in Atmospheric Sciences, National Taiwan University, 2025. Thesis: Next-Generation Adaptive Convection–Circulation Coupling Framework (NextACC).",
      "Exchange student, Institute for Atmospheric and Earth System Research, University of Helsinki, 2023–2024.",
      "B.S. in Atmospheric Sciences, National Taiwan University, 2024."
    ]
  },
  {
    title: "Research experience",
    items: [
      "Research Assistant, National Taiwan University, 2025–present. Lead developer of VVMex, a modular GPU-capable redesign of the Vector Vorticity cloud-resolving Model, including its coupled physics and hierarchical validation framework.",
      "Graduate research, 2024–2025. Developed NextACC, coupling a cubed-sphere shallow-water model with an array of two-dimensional VVMs to study convection–circulation interactions.",
      "Undergraduate research, 2020–2021. Built two-dimensional anelastic and quasi-compressible atmospheric models in C++."
    ]
  },
  {
    title: "Publications and preprints",
    items: [
      "C.-W. Hsieh, S.-Y. Tseng, and C.-M. Wu. “VVMex v1.0: A modular GPU-capable refactoring of the Vector Vorticity cloud-resolving Model (VVM) with LES-based hierarchical validation and performance analysis.” Under review at Geoscientific Model Development.",
      "C.-W. Hsieh and C.-M. Wu. “Next-Generation Adaptive Convection–Circulation Coupling Framework.” ESS Open Archive preprint, 2025. DOI: 10.22541/essoar.174051759.91277474."
    ]
  },
  {
    title: "Awards",
    items: [
      "Dean's Award for Academic Excellence, National Taiwan University, 2023.",
      "Presidential Award and three-time Dean's Award, National Taiwan University, 2021–2023.",
      "Second Place, NTU–IBM Quantum Computing Hackathon, 2022."
    ]
  },
  {
    title: "Technical expertise",
    items: [
      "Model development: cloud-resolving and multiscale atmospheric models, Cartesian and cubed-sphere grids, physical parameterizations, and numerical solvers.",
      "High-performance computing: C++, Fortran, Kokkos, CUDA, OpenACC, MPI, NCCL, profiling, and scalability analysis.",
      "Scientific software and analysis: Python, automated testing, ADIOS2, NetCDF, HDF5, NumPy, xarray, Matplotlib, and PyTorch."
    ]
  }
];
