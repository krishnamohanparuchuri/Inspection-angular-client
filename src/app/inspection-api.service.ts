import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class InspectionApiService {
  readonly inspectionApiurl = "https://localhost:7122/api";

  constructor(private http: HttpClient) {}

  getInspectionList(): Observable<any> {
    return this.http.get(this.inspectionApiurl + "/inspections");
  }

  addInspection(data: any) {
    return this.http.post(this.inspectionApiurl + "/inspections", data);
  }

  updateInspection(id: number | string, data: any) {
    return this.http.put(this.inspectionApiurl + `/inspections/${id}`, data);
  }

  deleteInspection(id: number | string) {
    return this.http.delete(this.inspectionApiurl + `/inspections/${id}`);
  }

  // inspection types

  getInspectionTypesList(): Observable<any> {
    return this.http.get(this.inspectionApiurl + "/inspectionTypes");
  }

  addInspectionType(data: any) {
    return this.http.post(this.inspectionApiurl + "/inspectionTypes", data);
  }

  updateInspectionType(id: number | string, data: any) {
    return this.http.put(
      this.inspectionApiurl + `/inspectionTypes/${id}`,
      data
    );
  }

  deleteInspectionType(id: number | string) {
    return this.http.delete(this.inspectionApiurl + `/inspectionTypes/${id}`);
  }

  // status
  getStatusesList(): Observable<any> {
    return this.http.get(this.inspectionApiurl + "/status");
  }

  addStatus(data: any) {
    return this.http.post(this.inspectionApiurl + "/status", data);
  }

  updateStatus(id: number | string, data: any) {
    return this.http.put(this.inspectionApiurl + `/status/${id}`, data);
  }

  deleteStatus(id: number | string) {
    return this.http.delete(this.inspectionApiurl + `/status/${id}`);
  }
}
