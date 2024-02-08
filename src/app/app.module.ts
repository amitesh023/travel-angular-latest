import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//Material Imports
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatOptionModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


//Date range picker
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { CarouselModule } from 'ngx-owl-carousel-o';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { GaqComponent } from './gaq/gaq.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { WhyChooseComponent } from './why-choose/why-choose.component';
import { IntroducingTravelInsuranceComponent } from './introducing-travel-insurance/introducing-travel-insurance.component';
import { TravelInsuranceProductsComponent } from './travel-insurance-products/travel-insurance-products.component';
import { SubmitAClaimBannerComponent } from './submit-a-claim-banner/submit-a-claim-banner.component';
import { HaveQuestionComponent } from './have-question/have-question.component';
import { DownloadsPolicyDocComponent } from './downloads-policy-doc/downloads-policy-doc.component';
import { CustomerCommentsComponent } from './gaq/customer-comments/customer-comments.component';
import { SearchBoxPipe } from './shared/pipes/search-box.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    GaqComponent,
    WhyChooseComponent,
    IntroducingTravelInsuranceComponent,
    TravelInsuranceProductsComponent,
    SubmitAClaimBannerComponent,
    HaveQuestionComponent,
    DownloadsPolicyDocComponent,
    SearchBoxPipe,
    CustomerCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    // Date range picker
    NgxDaterangepickerMd.forRoot({
      separator: ' - ',
      applyLabel: 'Select',
      format: 'DD/MM/YYYY', // could be 'YYYY-MM-DDTHH:mm:ss.SSSSZ'
      displayFormat: 'DD/MM/YYYY', // default is format value
    }),

    //for carousal
    CarouselModule,

    //Material
    MatTabsModule,
    MatRadioModule,
    MatOptionModule,
    MatExpansionModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
