export type CvSection = {
  title: string;
  items: string[];
};

export const cvSections: CvSection[] = [
  {
    title: "Education",
    items: [
      "M.S. Atmospheric Sciences, National Taiwan University, 2025. Thesis: NextACC.",
      "B.S. Atmospheric Sciences, National Taiwan University, 2024.",
      "Exchange student, INAR, University of Helsinki, 2023-2024."
    ]
  },
  {
    title: "Research focus",
    items: [
      "Cloud-resolving modeling, convection-circulation coupling, GPU-accelerated atmospheric models.",
      "High-resolution Taiwan simulations, land-atmosphere coupling, microphysics and radiation integration.",
      "Numerical model development with C++/Kokkos/CUDA/MPI and Python diagnostics."
    ]
  },
  {
    title: "Preprints / reports",
    items: [
      "C.-W. Hsieh and C.-M. Wu. Next-Generation Adaptive Convection-Circulation Coupling Framework. ESSOAr Preprint, 2025. DOI: 10.22541/essoar.174051759.91277474. Listed as a preprint; not currently presented as a peer-reviewed publication."
    ]
  },
  {
    title: "Selected presentations",
    items: [
      "Next-Generation Adaptive Convection-Circulation Coupling Framework. University Allied Workshop 2025 (oral); Climate Hotspots in Action 2024 (poster)."
    ]
  },
  {
    title: "Awards",
    items: [
      "Presidential Award, National Taiwan University, ranked top 2 for the academic year, 2023.",
      "Dean's Award, National Taiwan University, ranked top 2 for the semester, 3x recipient, Spring 2021, Spring 2022, Spring 2023.",
      "2nd Place, NTU-IBM Hackathon, developed a quantum algorithm using Qiskit for VLSI optimization, 2022."
    ]
  },
  {
    title: "Teaching / coursework",
    items: [
      "Teaching Assistant, National Taiwan University, Jan. 2023 - June 2025. Led discussion sessions and evaluated assignments for Atmospheric Thermodynamics, Cloud Dynamics, Machine Learning, and Statistics."
    ]
  },
  {
    title: "Technical skills",
    items: [
      "Models and physics: VVM, cloud-resolving modeling, cubed-sphere shallow-water models, P3, RRTMGP, Noah LSM.",
      "Computing and data: C/C++, Fortran, Python, CUDA, Kokkos, MPI, Slurm, NetCDF, HDF5, xarray."
    ]
  }
];
