import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import {UploadImageComponent} from "./pages/uploadImage/uploadImage.component";
import {UICollectionViewScrollPosition} from "nativescript-telerik-ui/listview/listview-ios-map";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "uploadImage", component: UploadImageComponent}
];

export const navigatableComponents = [
  LoginComponent,
  HomeComponent,
  UploadImageComponent
];