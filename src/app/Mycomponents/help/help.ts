import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  imports: [],
  templateUrl: './help.html',
  styleUrl: './help.css'
})
export class Help {
 faqs = [
    {
      id: 1,
      question: 'How do I add a match result?',
      answer: 'Go to the "Add Matches" page, fill in the winner, overs, runs, and date, then click Save.'
    },
    {
      id: 2,
      question: 'Where can I see all past matches?',
      answer: 'All matches are listed on the "Matches" page in a clean card layout.'
    },
    {
      id: 3,
      question: 'Can I edit or delete a match?',
      answer: 'Yes, you can  edit or delete matches.'
    },
    {
      id: 4,
      question: 'How do I reset the form?',
      answer: 'Click the "Reset" button at the bottom of the Add Matches form to clear all inputs.'
    }
  ];
}
