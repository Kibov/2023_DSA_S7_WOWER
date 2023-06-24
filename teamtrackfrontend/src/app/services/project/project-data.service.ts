import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectDataService {
  private _serviceId!: number | null;
  private _serviecName!: string | null;

  constructor() {}

  get serviceId(): number {
    return this._serviceId as number;
  }

  set serviceId(id: number | null) {
    this._serviceId = id;
  }

  public get serviceName(): string {
    return this._serviecName as string;
  }

  public set serviceName(serviecNameIn: string | null) {
    this._serviecName = serviecNameIn;
  }
}
