import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Tutorials';
  videos: [];

  constructor(private titleService: Title, private http: HttpClient) {
    this.titleService.setTitle(this.title);
    this.http.get('assets/videos_yourname.json')
      .subscribe((data: any) => {
          this.videos = data.videos;
        },
        error => {
          console.log(error);
          this.videos = [];
        }
      );
  }

  openVideo(index) {
    window.open(this.videos[index]['url'], ' _blank');
  }

  getAvatarUrl(index){
    return 'url('+this.videos[index]['avatarUrl']+')';
  }
}
