import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare const pauseAudioAfterPlayingIt: any;
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  // @ViewChild('bgvid') myDiv: ElementRef;
  constructor() { }

  ngOnInit(): void {
    this.pauseAudio();
    // console.log(this.myDiv.nativeElement.innerHTML);
  }

  pauseAudio()
  {
    pauseAudioAfterPlayingIt();
  }
}

 