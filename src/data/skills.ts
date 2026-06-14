export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Atmospheric models",
    items: ["VVM", "cloud-resolving modeling", "shallow-water models", "land-surface coupling"]
  },
  {
    category: "Programming",
    items: ["C++", "Fortran", "Python", "Julia", "Shell"]
  },
  {
    category: "HPC/GPU",
    items: ["CUDA", "Kokkos", "OpenACC", "MPI", "SLURM", "ADIOS2"]
  },
  {
    category: "Scientific data",
    items: ["NetCDF", "HDF5", "PnetCDF", "xarray", "NumPy"]
  },
  {
    category: "Model physics",
    items: ["P3 microphysics", "RRTMGP radiation", "Noah LSM", "surface fluxes"]
  },
  {
    category: "Verification",
    items: ["regression tests", "cross-model comparison", "idealized tests", "diagnostics"]
  }
];
