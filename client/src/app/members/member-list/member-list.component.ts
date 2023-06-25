import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members$:Observable<member[]>|undefined;

  constructor(private memberService:MembersService) { }

  ngOnInit(): void {
    this.members$ = this.memberService.getMembers();
  }

}
