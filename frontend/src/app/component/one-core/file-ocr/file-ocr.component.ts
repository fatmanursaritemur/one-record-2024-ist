import {Component, OnInit} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-file-ocr',
  templateUrl: './file-ocr.component.html',
  styleUrls: ['./file-ocr.component.scss']
})
export class FileOcrComponent implements OnInit {
  ngOnInit(): void {
    $(document).ready(function () {

      // @ts-ignore
      // @ts-ignore
      // @ts-ignore
      // @ts-ignore
      // @ts-ignore
      var upload = $('.upload'), animation,
        pathRepeat = 'M4.5,4.5 C6.4,2.6 9.6,2.6 11.5,4.5 C12.2,5.2 12.7,6.2 12.9,7.2 L14.9,6.9 C14.7,5.4 14,4.1 13,3.1 C10.3,0.4 5.9,0.4 3.1,3.1 L0.9,0.9 L0.2,7.3 L6.6,6.6 L4.5,4.5 Z';

      fakeUpload(5000);

      upload.find('nav a').click(function (e) {

        let btn = $(this);


        return false;

      });

      function completeAnimation() {
        upload.addClass('finished');
        upload.find('.text > strong > span').text('Uploaded');
        upload.find('.percent span').animate({
          width: 20
        }, 400);
      }

      // @ts-ignore
      function fakeUpload(duration) {
        animation = $({
          num: 0
        }).animate({
            num: 100
          },
          {
            duration: 5000,
            easing: 'linear',
            step() {
              // @ts-ignore
              upload[0].style.setProperty('--percent', Math.floor(this.num));
              upload.find('[data-seconds]').text(Math.floor((duration - duration * this.num / 100) / 1000) + 1);
            },
            complete() {
              // @ts-ignore
              upload[0].style.setProperty('--percent', Math.floor(this.num));
              completeAnimation();
            }
          });
      }

      // @ts-ignore
      function morhp(toPath) {
        $('.play svg').each(function () {
          let svg = $(this);
          // @ts-ignore
          Snap(svg.children('path')[0]).animate({
            d: toPath
          }, 400);
        });
      }

      $('.restart').on('click', e => {

        fakeUpload(5000);

        // reset classes
        upload.removeClass('paused finished');
        upload.find('nav a').removeClass('active');
        upload.find('.text > strong > span').text('Uploading');
        upload.find('.percent span').removeAttr('style');

        return false;

      });

      var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

      upload.toggleClass('isMobile', isMobile);

    });
  }

}
