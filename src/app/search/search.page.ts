import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  news: any = []
  search: any
  queryName = this.router.url

  constructor(private searchService: SearchService, private router: ActivatedRoute) { }

  ngOnInit() {
  }

  pesquisa(news: any) {
    this.searchService.getNewsSearch(news)
    .subscribe(response => this.news = response
      )
  }


  

}
