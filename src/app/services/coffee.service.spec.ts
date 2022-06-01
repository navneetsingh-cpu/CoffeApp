import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { CoffeeService } from './coffee.service';
import { HttpClient } from '@angular/common/http';
import { Coffee } from '../model/coffee.model';
import { of } from 'rxjs';

describe('CoffeeService', () => {
  let service: CoffeeService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let httpController: HttpTestingController;
  let url = 'https://random-data-api.com/api/coffee/random_coffee';

  const expectedData: Coffee[] =
    [
      {
        "id": 6272,
        "uid": "db38dc91-b2c6-4ab0-abb5-c06b98824eff",
        "blend_name": "Captain's Treat",
        "origin": "Kayanza, Burundi",
        "variety": "Sarchimor",
        "notes": "astringent, chewy, corriander, black cherry, fresh bread",
        "intensifier": "crisp"
      },
      {
        "id": 8811,
        "uid": "281d8650-1bc6-4adf-b829-a910dfcd5cfc",
        "blend_name": "Wake-up Enlightenment",
        "origin": "Oaxaca, Mexico",
        "variety": "Liberica",
        "notes": "quick, full, lime, rose hips, sundried tomato",
        "intensifier": "lingering"
      }
    ]
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CoffeeService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected data (HttpClient called once)', (done: DoneFn) => {
    const coffeeService = new CoffeeService(httpClientSpy);

    httpClientSpy.get.and.returnValue(of(expectedData));

    coffeeService.getCoffeeList$(2).subscribe({
      next: data => {
        expect(data)
          .withContext('expected data')
          .toEqual(expectedData);
        done();
      },
      error: done.fail
    });
    expect(httpClientSpy.get.calls.count())
      .withContext('one call')
      .toBe(1);
  });

  it('should call getCoffeeList and return an array of Coffees', () => {
    const coffeeService = TestBed.inject(CoffeeService);

    coffeeService.getCoffeeList$(1).subscribe((res) => {
      expect(res).toEqual(expectedData);
    });
    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}?size=1`,
    });
    req.flush(expectedData);
  });

  afterEach(() => {
    httpController.verify();
  });
});


