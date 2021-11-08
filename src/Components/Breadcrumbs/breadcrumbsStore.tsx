export function createBreadcrumbsStore() {
  return {
    breadCrumbs: [""],
    setBreadCrumbs(newBreadCrumbs: Array<string>) {
      this.breadCrumbs = [...newBreadCrumbs];
    },
  };
}
