import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {ImageData} from '../imagedata';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  domainUrl = "http://localhost:8888";
  imgBasePath = this.domainUrl + "/upload/data/";
  @Input() imagedata: ImageData;
  imgArray:string[];

  
  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
  	this.getHeroes().subscribe(res => {
  		this.imgArray=res;
  		
  		console.log("result: " + res);

  	});
  }

  previousimg()
  {
  	if(this.imagedata.index > 0)
  		this.imagedata.index -= 1;
  	this.imagedata.path = this.imgBasePath + this.imgArray[this.imagedata.index];
  }

  nextimg()
  {
  	if(this.imagedata.index < this.imgArray.length - 1)
  		this.imagedata.index += 1;
	this.imagedata.path = this.imgBasePath + this.imgArray[this.imagedata.index];
  }

  getHeroes (): Observable<string[]> {
  	return this.http.get<string[]>(this.domainUrl + "/upload/list_images.php")
  }	
}
