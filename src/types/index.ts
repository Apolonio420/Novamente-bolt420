export interface Image {
  id: string;
  url: string;
  prompt: string;
  createdAt: Date;
  userId?: string;
}

export interface MockupTemplate {
  id: string;
  name: string;
  type: 'hoodie' | 'classic-tshirt' | 'oversized-tshirt';
  printLocation: 'front' | 'back';
  printSize: 'R1' | 'R2' | 'R3';
}

export interface CartItem {
  image: Image;
  template: MockupTemplate;
  quantity: number;
  price: number;
}