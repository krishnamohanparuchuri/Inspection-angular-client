import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { InspectionApiService } from "src/app/inspection-api.service";

@Component({
  selector: "app-show-inspection",
  templateUrl: "./show-inspection.component.html",
  styleUrls: ["./show-inspection.component.css"],
})
export class ShowInspectionComponent implements OnInit {
  inspectionList$!: Observable<any[]>;
  inspectionTypesList$!: Observable<any[]>;
  inspectionTypesList: any = [];

  // map to display data associate with foriegn keys
  inspectionTypesMap: Map<number, string> = new Map();

  constructor(private service: InspectionApiService) {}

  ngOnInit(): void {
    this.inspectionList$ = this.service.getInspectionList();

    this.inspectionTypesList$ = this.service.getInspectionTypesList();

    this.refreshInspectionTypesMap();
  }

  // variables (properties)
  modalTitle: string = "";
  activateAddEditInspectionComponent: boolean = false;
  inspection: any;

  modalAdd() {
    this.inspection = {
      id: 0,
      sttaus: null,
      comments: null,
      inspectionId: null,
    };
    this.modalTitle = "Add Inspection";
    this.activateAddEditInspectionComponent = true;
  }

  modalClose() {
    this.activateAddEditInspectionComponent = false;
    this.inspectionList$ = this.service.getInspectionList();
  }
  refreshInspectionTypesMap() {
    this.service.getInspectionTypesList().subscribe((data) => {
      this.inspectionTypesList = data;
      for (let i = 0; i < data.length; i++) {
        this.inspectionTypesMap.set(
          this.inspectionTypesList[i].id,
          this.inspectionTypesList[i].inspectionName
        );
      }
    });
  }
}
