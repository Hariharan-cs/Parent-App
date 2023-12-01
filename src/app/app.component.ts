import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './services/api-service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  production = false
  title = 'Parent APP';

  // trialUrl = this.production ? 'https://trial.onedpo-poc.com' : 'http://localhost:4200';
  // complianceUrl = this.production ? 'https://compliance.onedpo-poc.com': 'http://localhost:4300';

  trialUrl = environment.TRIAL_APPLICATION_URL;
  complianceUrl = environment.COMPLIANCE_APPLICATION_URL;

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) {
    let host = this.production ?'.onedpo-poc.com' :'.localhost';
    this.activatedRoute.queryParams.subscribe(params => {
          console.log('tokens', params)
          Object.keys(params).forEach((key) => {
            let token = params[key];
            var now = new Date();
            now.setTime(now.getTime() + 1 * 3600 * 1000);
            document.cookie =
              key + "=" + token +
              ";domain=" + host +
              ";expires=" + now.toUTCString() +
              ";path=/;secure=true";
            // ";max-age=3600;secure=true";
          });

          console.log('Tokens from URL set to cookies:', document.cookie)
      });
  }

  ngOnInit(){
    this.trialUrl += '?accessToken=1access2Token&refreshToken=1refresh2Token&idToken=1id2Token';
    this.complianceUrl += '?accessToken=1access2Token&refreshToken=1refresh2Token&idToken=1id2Token';
  }

  logout(){
    // document.cookie = "mycookie=;domain=.localhost;path=/;max-age=0";
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    console.log('Cookies cleared:', document.cookie)

  }

  getNewTokens(){

  }

  setCookies(){
    document.cookie = "mycookie=testcookie;domain=.localhost;path=/;max-age=1";
  }

  validateToken(){
    let toUTCString = new Date().toUTCString()

    let data = {
      accessToken: "1access2Token" + toUTCString,
      refreshToken: "1refresh2Token" + toUTCString,
      idToken: "1id2Token" + toUTCString,
    };
    this.apiService.validateToken(data).subscribe(x=> console.log(this.title +'Validate Token From API', x))
  }

  acquireToken(){
    this.apiService.acquireToken().subscribe(x=> console.log(this.title +'Acquire Token From API', x))
  }

  adconfiguration(){
    this.apiService.adconfiguration().subscribe(x=> console.log(this.title +'Ad Confi From API', x))
  }

}

