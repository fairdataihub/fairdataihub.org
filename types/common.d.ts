interface PublicationsItem {
  title: string;
  url: string;
  type: string;
  citation: string;
  subtitle: string;
}

interface PublicationsItemList {
  publications: PublicationsItem[];
}
