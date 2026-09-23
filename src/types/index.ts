export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  category: string;
  iconName: string;
  estDuration: string;
  startingPrice: string;
  recommendedInterval: string;
  fullDesc: string;
  keyChecklist: string[];
  symptoms: string[];
  imageUrl?: string;
}

export interface BikeCategory {
  id: string;
  name: string;
  tagline: string;
  popularModels: string[];
  recommendedEngineOil: string;
  serviceFocus: string;
  inspectionPoints: number;
  imageUrl?: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  badge?: string;
  idealFor: string;
  turnaroundTime: string;
  inclusions: string[];
  popular?: boolean;
  imageUrl?: string;
}

export interface SpecialOffer {
  id: string;
  title: string;
  code: string;
  discount: string;
  description: string;
  validUntil: string;
  tag: string;
  imageUrl?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  bikeModel: string;
  serviceDone: string;
  rating: number;
  date: string;
  comment: string;
  verifiedRider: boolean;
  avatarUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  specs: string;
  imageUrl?: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  bikeModel: string;
  vehicleType: 'motorcycle' | 'scooter' | 'electric';
  serviceRequired: string;
  preferredDate: string;
  preferredTime: string;
  additionalNotes: string;
  pickupDropRequired: boolean;
  pickupAddress: string;
  appliedCoupon: string;
}
