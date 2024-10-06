import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MenuItem, MessageService, PrimeNGConfig} from 'primeng/api';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClient} from "@angular/common/http";
import {OneCoreService} from "../../service/one-core.service";

declare var $: any; // jQuery'yi kullanmak için

@Component({
  selector: 'app-one-core',
  templateUrl: './one-core.component.html',
  styleUrls: ['./one-core.component.scss']
})
export class OneCoreComponent implements OnInit {
  declare pdfjsLib: any;
  visibleStep: boolean = true;
  visibleStep1: boolean = false;
  httpClient: HttpClient;
  deneeee: any;
  require: any;

  constructor(private config: PrimeNGConfig, private messageService: MessageService, http: HttpClient, private oneCoreService: OneCoreService) {
    this.visibleStep = true;
    this.httpClient = http;
  }


  ngOnInit() {
    this.ekUpload();
  }

  visibleStep3() {
    this.visibleStep = false;
    setTimeout(() => {
      this.visibleStep = true;
      this.visibleStep1 = false;
      this.simulateNextClick(false);
    }, 3000);


  }

  sendSLAgreement() {
    this.oneCoreService.sendSLAgreement(null)
  }

  simulateNextClick(timer: boolean) {
    if (timer) {
      setTimeout(() => {
        const activeElement = document.querySelector('.wizard .nav-tabs li.active');
        if (activeElement) {
          let nextElement;
          nextElement = activeElement.nextElementSibling;
          // @ts-ignore
          const tabLink = nextElement.querySelector('a[data-toggle="tab"]');

          console.log(tabLink);
          if (tabLink) {
            // Sonraki elemente tıklama olayını simüle et
            const event = new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
              view: window
            });
            tabLink.dispatchEvent(event);
            console.log('Sonraki elemana tıklandı!');
          } else {
            console.log('Sonraki element bulunamadı.');
          }
        } else {
          console.log('Aktif element bulunamadı.');
        }
      }, 1500);
    } else {
      const activeElement = document.querySelector('.wizard .nav-tabs li.active');
      if (activeElement) {
        let nextElement;
        nextElement = activeElement.nextElementSibling;
        // @ts-ignore
        const tabLink = nextElement.querySelector('a[data-toggle="tab"]');

        console.log(tabLink);
        if (tabLink) {
          // Sonraki elemente tıklama olayını simüle et
          const event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
          });
          tabLink.dispatchEvent(event);
          console.log('Sonraki elemana tıklandı!');
        } else {
          console.log('Sonraki element bulunamadı.');
        }
      } else {
        console.log('Aktif element bulunamadı.');
      }
    }
  }

  simulatePreviusClick() {
    const activeElement = document.querySelector('.wizard .nav-tabs li.active');
    if (activeElement) {
      let nextElement;
      nextElement = activeElement.previousElementSibling;
      // @ts-ignore
      const tabLink = nextElement.querySelector('a[data-toggle="tab"]');

      console.log(tabLink);
      if (tabLink) {
        // Sonraki elemente tıklama olayını simüle et
        const event = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });
        tabLink.dispatchEvent(event);
        console.log('Sonraki elemana tıklandı!');
      } else {
        console.log('Sonraki element bulunamadı.');
      }
    } else {
      console.log('Aktif element bulunamadı.');
    }
  }

  ekUpload() {
    function Init() {

      console.log("Upload Initialised");

      var fileSelect = document.getElementById('file-upload'),
        fileDrag = document.getElementById('file-drag'),
        submitButton = document.getElementById('submit-button');

      // @ts-ignore
      fileSelect.addEventListener('change', fileSelectHandler, false);

      // Is XHR2 available?
      var xhr = new XMLHttpRequest();
      if (xhr.upload) {
        // File Drop
        // @ts-ignore
        fileDrag.addEventListener('dragover', fileDragHover, false);
        // @ts-ignore
        fileDrag.addEventListener('dragleave', fileDragHover, false);
        // @ts-ignore
        fileDrag.addEventListener('drop', fileSelectHandler, false);
      }
    }

    // @ts-ignore

    function fileDragHover(e) {
      var fileDrag = document.getElementById('file-drag');

      e.stopPropagation();
      e.preventDefault();

      // @ts-ignore
      fileDrag.className = (e.type === 'dragover' ? 'hover' : 'modal-body file-upload');
    }

    // @ts-ignore
    function fileSelectHandler(e) {
      // Fetch FileList object
      var files = e.target.files || e.dataTransfer.files;

      // Cancel event and hover styling
      fileDragHover(e);

      // Process all File objects
      for (var i = 0, f; f = files[i]; i++) {
        parseFile(f);
        uploadFile(f);
      }
    }

    // @ts-ignore

    // Output
    function output(msg) {
      // Response
      var m = document.getElementById('messages');
      // @ts-ignore
      m.innerHTML = msg;
    }

    // @ts-ignore

    function parseFile(file) {
      console.log(file.name);
      output('<strong>' + encodeURI(file.name) + '</strong>');
      var fileType = file.type;
      var isImage = /\.(?=gif|jpg|png|jpeg)/gi.test(file.name);
      var isPDF = /\.(?=pdf)/gi.test(file.name);
      if (isImage) {
        // @ts-ignore
        document.getElementById('start').classList.add("hidden");
        // @ts-ignore
        document.getElementById('response').classList.remove("hidden");
        // @ts-ignore
        document.getElementById('notimage').classList.add("hidden");
        // Thumbnail Preview
        // @ts-ignore
        document.getElementById('file-image').classList.remove("hidden");
        // @ts-ignore
        document.getElementById('file-image').src = URL.createObjectURL(file);
      } else if (isPDF) {
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        document.getElementById('start').classList.add("hidden");
        // @ts-ignore
        document.getElementById('response').classList.remove("hidden");
        // @ts-ignore
        document.getElementById('notimage').classList.add("hidden");
        // Thumbnail Preview
        // @ts-ignore
        document.getElementById('file-image').classList.remove("hidden");
        // @ts-ignore

      } else {
        // @ts-ignore
        document.getElementById('file-image').classList.add("hidden");
        // @ts-ignore
        document.getElementById('notimage').classList.remove("hidden");
        // @ts-ignore
        document.getElementById('start').classList.remove("hidden");
        // @ts-ignore
        document.getElementById('response').classList.add("hidden");
        // @ts-ignore
        document.getElementById("file-upload-form").reset();
      }
    }

    // @ts-ignore

    function setProgressMaxValue(e) {
      var pBar = document.getElementById('file-progress');
      // @ts-ignore

      if (e.lengthComputable) {
        // @ts-ignore

        pBar.max = e.total;
      }
    }

    // @ts-ignore

    function updateFileProgress(e) {
      var pBar = document.getElementById('file-progress');
      // @ts-ignore

      if (e.lengthComputable) {
        // @ts-ignore

        pBar.value = e.loaded;
      }
    }

    // @ts-ignore

    function uploadFile(file) {

      var xhr = new XMLHttpRequest(),
        fileInput = document.getElementById('class-roster-file'),
        pBar = document.getElementById('file-progress'),
        fileSizeLimit = 1024; // In MB
      if (xhr.upload) {
        // Check if file is less than x MB
        if (file.size <= fileSizeLimit * 1024 * 1024) {
          // Progress bar
          // @ts-ignore

          pBar.style.display = 'inline';
          xhr.upload.addEventListener('loadstart', setProgressMaxValue, false);
          xhr.upload.addEventListener('progress', updateFileProgress, false);

          // File received / failed
          xhr.onreadystatechange = function (e) {
            if (xhr.readyState == 4) {
              // Everything is good!

              // progress.className = (xhr.status == 200 ? "success" : "failure");
              // document.location.reload(true);
            }
          };

          // Start upload
          // @ts-ignore

          xhr.open('POST', document.getElementById('file-upload-form').action, true);
          xhr.setRequestHeader('X-File-Name', file.name);
          xhr.setRequestHeader('X-File-Size', file.size);
          xhr.setRequestHeader('Content-Type', 'multipart/form-data');
          xhr.send(file);
        } else {
          output('Please upload a smaller file (< ' + fileSizeLimit + ' MB).');
        }
      }
    }

    // Check for the various File API support.
    if (window.File && window.FileList && window.FileReader) {
      Init();
    } else {
      // @ts-ignore

      document.getElementById('file-drag').style.display = 'none';
    }
  }

  // @ts-ignore

  ekUpload();


}

