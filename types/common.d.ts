interface PublicationsItem {
  title: string;
  doi: string;
  citation: string;
  subtitle: string;
}

interface PublicationsItemList {
  publications: PublicationsItem[];
}
