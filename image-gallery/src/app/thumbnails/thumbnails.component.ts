import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {ImageData} from '../imagedata';

@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.css']
})

export class ThumbnailsComponent implements OnInit {
  domainUrl = "http://localhost:8888";
  imgBasePath = this.domainUrl + "/upload/data/";
  imgsrcs:ImageData[] = new Array();
  imgIndx = 0;
  imgArray:string[];
  imgdata: ImageData;

  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
  	this.getHeroes().subscribe(res => {
  		this.imgArray=res;
      let indx = 0;
		this.imgArray.forEach( (element) => {
    	this.imgsrcs.push(new ImageData(this.imgBasePath + res[indx], indx));
      indx += 1;
});

  		console.log("result: " + res);

  	});
  }

  getHeroes (): Observable<string[]> {
  	return this.http.get<string[]>(this.domainUrl + "/upload/list_images.php")
  }	

  selectedImage(img: ImageData)
  {
  	console.log("selected image:" + img);
    img.path = img.path.replace("thumbnails", "data"); 
    this.imgdata = img;
  } 
}

