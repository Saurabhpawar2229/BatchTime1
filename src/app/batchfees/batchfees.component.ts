import { Component, OnInit } from '@angular/core';
import { BatchService } from '../batch.service';

@Component({
  selector: 'app-batchfees',
  templateUrl: './batchfees.component.html',
  styleUrls: ['./batchfees.component.css']
})
export class BatchfeesComponent implements OnInit {

  public batches = [];

  // Add instance of Service in constructor
  constructor(private _batchservice:BatchService)
  {
  }

  // Call the service method once
  ngOnInit() 
  {
    this.batches = this._batchservice.GetBatchDetails();
  }
}
