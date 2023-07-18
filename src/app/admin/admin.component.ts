import { Component } from '@angular/core';
import { AccountModel } from '../Models/AccountModel';
import { AccountService } from '../shared/Services/AccountService/account.service';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../shared/Services/admin.service';
import { DellManagerModel } from '../Models/DellManagerModel';
import { RegionModel } from '../Models/RegionModel';
import { RecruiterModel } from '../Models/RecruiterModel';
import { USTTPMModel } from '../Models/USTTPMModel';
import { LocationModel } from '../Models/LocationModel';
import { USTPOCModel } from '../Models/USTPOCModel';
import { TechnologyModel } from '../Models/TechnologyModel';
import { RegionService } from '../shared/Services/RegionService/region.service';
import { LocationService } from '../shared/Services/LocationService/location.service';
import { UstTpmService } from '../shared/Services/UsttpmService/ust-tpm.service';
import { UstPocService } from '../shared/Services/UstpocService/ust-poc.service';
import { RecruiterService } from '../shared/Services/RecruiterService/recruiter.service';
import { DellManagerService } from '../shared/Services/DellManagerService/dell-manager.service';
import { TechnologyService } from '../shared/Services/TechnologyService/technology.service';
import { DomainModel } from '../Models/DomainModel';
import { DomainService } from '../shared/Services/DomainService/domain.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  selectedTab: string;

  accountList: AccountModel[] = [];
  domainList:DomainModel[]=[];
  dellManagerList: DellManagerModel[] = [];
  regionList: RegionModel[] = [];
  technologyList: TechnologyModel[] = [];
  locationList: LocationModel[] = [];
  ustPocList: USTPOCModel[] = [];
  ustTpmList: USTTPMModel[] = [];
  recruiterList: RecruiterModel[] = [];


  constructor(private accountservice:AccountService, private regionService: RegionService,
    private locationService: LocationService, private domainservice:DomainService,
    private tpmService: UstTpmService,
    private pocService: UstPocService,
    private recruiterService: RecruiterService,
    private dellManagerService: DellManagerService,
    private techService: TechnologyService,
  ) {
    this.selectedTab = 'Domain';
    this.selectedTab = 'Region';
    this.selectedTab = 'DellManager';
    this.selectedTab = 'Recruiter';
    this.selectedTab = 'USTPOC';
    this.selectedTab = 'USTTPM';
    this.selectedTab = 'Account';
  }

  ngOnInit(): void {
    this.GetAccounts();
    this.GetDellManger();
    this.GetRecruiter();
    this.GetUstPoc();
    this.GetUSTTPM();
    this.GetRegion();
    this.GetDomain();

  }

  onTabChange(event: any) {
    this.selectedTab = event.tab.textLabel;
  }
  GetAccounts() {
    return new Promise((res, rej) => {
      this.accountservice.GetAllAccountData().subscribe(result => {
        this.accountList = result;
        res('')
        console.table(result)
      })
    })
  }
  GetDellManger() {
    return new Promise((res, rej) => {
      this.dellManagerService.GetAllDellManagerData().subscribe((result) => {
        this.dellManagerList = result;
        res('');
      });
    });
  }

   GetRecruiter() {
     return new Promise((res, rej) => {
       this.recruiterService.GetAllRecruiterData().subscribe((result) => {
         this.recruiterList = result;
         res('');
       });
     });
   }


   GetUstPoc() {
    return new Promise((res, rej) => {
      this.pocService.GetAllUstPocData().subscribe((result) => {
        this.ustPocList = result;
        res('');
      });
    });
  }
   GetUSTTPM() {
     return new Promise((res) => {
       this.tpmService.GetAllUSTTPMData().subscribe((result) => {
         this.ustTpmList = result;
         res('');
       });
     });
   }


   GetRegion() {
    return new Promise((res, rej) => {
      this.regionService.GetAllRegionData().subscribe((result) => {
        this.regionList = result;
        res('');
      });
    });
  }

  GetDomain() {
    return new Promise((res, rej) => {
      this.domainservice.GetAllDomainData().subscribe((result) => {
        this.domainList = result;
        console.log("domain")
        console.log(result)
        res('');
      });
    });
  }

  editAccount(accountList:any){

  }
  deleteAccount(accountList:any){

  }
}
