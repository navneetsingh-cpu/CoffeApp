import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { Coffee } from '../model/coffee.model';
import { CoffeeService } from '../services/coffee.service';
import { ApiGetMockData, ApiSuccess } from './actions';
import { RootEffects } from './effects';
import { RootState } from './reducer';


const initialState: RootState = {
  error: null,
  selectedMockData: null,
}

const mockData: Coffee[] = [
  {
    "id": 9509,
    "uid": "9c99b1ca-c070-43b0-8ba4-19733c862dd4",
    "blend_name": "Bluebery Extract",
    "origin": "Nueva Segovia, Nicaragua",
    "variety": "Dega",
    "notes": "complex, chewy, white grape, sundried tomato, black pepper",
    "intensifier": "dull"
  },
  {
    "id": 2343,
    "uid": "8e97dba5-dead-4875-9e23-f08e1cd03b7a",
    "blend_name": "Street Java",
    "origin": "Boquete, Panama",
    "variety": "Dilla",
    "notes": "bright, round, dates, green pepper, rye",
    "intensifier": "sharp"
  },
  {
    "id": 2888,
    "uid": "e30e0a3e-3a9c-4967-9eea-adec55fd6836",
    "blend_name": "Evening Symphony",
    "origin": "Kabirizi, Rwanda",
    "variety": "Bourbon",
    "notes": "complex, watery, almond, mushroom, snow pea",
    "intensifier": "dense"
  },
  {
    "id": 7444,
    "uid": "f46b5db0-8ad0-44d7-93d6-d0b68300082f",
    "blend_name": "Kreb-Full-o Enlightenment",
    "origin": "Boquete, Panama",
    "variety": "S795",
    "notes": "tart, velvety, clementine, mushroom, nutmeg",
    "intensifier": "dry"
  },
  {
    "id": 2464,
    "uid": "eee826bc-0b0a-47c6-9c80-353c1b4fe2c1",
    "blend_name": "Morning Java",
    "origin": "Casanare, Colombia",
    "variety": "Ethiopian Heirloom",
    "notes": "sharp, silky, molasses, black-tea, honey",
    "intensifier": "tart"
  },
  {
    "id": 2432,
    "uid": "02c2da4b-47e1-43b7-bcb8-8afdf7f4c2fc",
    "blend_name": "Winter Mug",
    "origin": "Antioquia, Colombia",
    "variety": "Obata",
    "notes": "soft, creamy, tamarind, cranberry, molasses",
    "intensifier": "dry"
  },
  {
    "id": 2824,
    "uid": "8e222bf3-ed5a-4903-afd9-088528667c2f",
    "blend_name": "Reg's Town",
    "origin": "Dipilto, Nicaragua",
    "variety": "Yellow Bourbon",
    "notes": "dry, syrupy, black currant, molasses, fresh wood",
    "intensifier": "vibrant"
  },
  {
    "id": 2684,
    "uid": "4e65c980-e03a-40c7-99ba-5e8a38c9173f",
    "blend_name": "Evening Bean",
    "origin": "Manjarabad, India",
    "variety": "Geisha",
    "notes": "mild, smooth, coconut, lemon, leathery",
    "intensifier": "crisp"
  },
  {
    "id": 1509,
    "uid": "4d21e924-fa3d-4439-89b2-ca0b857563f1",
    "blend_name": "Wake-up Breaker",
    "origin": "Jalisco, Mexico",
    "variety": "Geisha",
    "notes": "dense, full, lychee, olive, clementine",
    "intensifier": "astringent"
  },
  {
    "id": 6205,
    "uid": "40944713-5c78-4808-87b2-7c676272df68",
    "blend_name": "Red Extract",
    "origin": "Atitlan, Guatemala",
    "variety": "Mokka",
    "notes": "juicy, creamy, nougat, toast, hay",
    "intensifier": "clean"
  },
  {
    "id": 2731,
    "uid": "fac3299f-4a80-4777-8526-653ee7587d00",
    "blend_name": "Good-morning Cake",
    "origin": "Kayanza, Burundi",
    "variety": "Dilla",
    "notes": "dry, watery, fresh bread, nutmeg, cola",
    "intensifier": "crisp"
  },
  {
    "id": 7918,
    "uid": "6cbd179c-a314-4aa0-b0e9-24388335418a",
    "blend_name": "Chocolate Bean",
    "origin": "Puebla, Mexico",
    "variety": "Kaffa",
    "notes": "complex, smooth, nectarine, dates, hay",
    "intensifier": "tart"
  },
  {
    "id": 617,
    "uid": "7866df54-8817-467d-a890-a7b469130030",
    "blend_name": "Split Java",
    "origin": "Volcan, Panama",
    "variety": "Villa Sarchi",
    "notes": "clean, velvety, quakery, hops, orange creamsicle",
    "intensifier": "clean"
  },
  {
    "id": 3741,
    "uid": "971e4926-552e-4f85-be75-5fb846f4fe5a",
    "blend_name": "Goodbye Delight",
    "origin": "Casanare, Colombia",
    "variety": "Villa Sarchi",
    "notes": "muted, juicy, barley, lychee, grassy",
    "intensifier": "vibrant"
  },
  {
    "id": 7095,
    "uid": "d59d4a97-85da-4782-8041-d821082a4dbd",
    "blend_name": "Major Cowboy",
    "origin": "Kiamba, Kenya",
    "variety": "Catimors",
    "notes": "mild, velvety, cranberry, cedar, raisin",
    "intensifier": "faint"
  },
  {
    "id": 5657,
    "uid": "936fec7c-1c93-48d8-9f45-93c86ead0876",
    "blend_name": "Chocolate Equinox",
    "origin": "Veracruz, Mexico",
    "variety": "Villa Sarchi",
    "notes": "crisp, syrupy, burnt sugar, raspberry, vanilla",
    "intensifier": "quick"
  },
  {
    "id": 7665,
    "uid": "6997075f-bd6c-4efd-835e-34e05b7773a0",
    "blend_name": "Cascara Java",
    "origin": "Comayagua, Honduras",
    "variety": "Catimors",
    "notes": "bright, full, cinnamon, graham cracker, star fruit",
    "intensifier": "sharp"
  },
  {
    "id": 1495,
    "uid": "e3c099a5-171f-4e1d-8ff2-58748dd56283",
    "blend_name": "Brooklyn Nuts",
    "origin": "Kayanza, Burundi",
    "variety": "Barbuk Sudan",
    "notes": "dense, chewy, green-tea, tomato, carbon",
    "intensifier": "vibrant"
  },
  {
    "id": 1962,
    "uid": "0654e8c9-6f18-406a-9575-1729879e767c",
    "blend_name": "Reg's Look",
    "origin": "Opalca, Honduras",
    "variety": "Red Bourbon",
    "notes": "dirty, round, cantaloupe, dates, lemon verbena",
    "intensifier": "vibrant"
  },
  {
    "id": 6593,
    "uid": "d746b266-34fc-4ba4-bc9e-97faa3ec0880",
    "blend_name": "Red Forrester",
    "origin": "Kayanza, Burundi",
    "variety": "Obata",
    "notes": "bright, syrupy, honeysuckle, lavender, walnut",
    "intensifier": "dense"
  },
  {
    "id": 6929,
    "uid": "b266724c-75ad-4b36-98fc-5fb24821c588",
    "blend_name": "Bluebery Nuts",
    "origin": "Chichontepec, El Salvador",
    "variety": "Colombia",
    "notes": "delicate, full, peanut, cola, orange",
    "intensifier": "lingering"
  },
  {
    "id": 7801,
    "uid": "fa6dc26d-cdd3-424d-80e1-c39d9fc5de1f",
    "blend_name": "Cascara Volcano",
    "origin": "Kayanza, Burundi",
    "variety": "Typica",
    "notes": "juicy, creamy, lemongrass, quakery, lemonade",
    "intensifier": "quick"
  },
  {
    "id": 8918,
    "uid": "2a3b8131-2c1c-42c9-82f8-9add7d3a1eac",
    "blend_name": "Summer Enlightenment",
    "origin": "Casanare, Colombia",
    "variety": "Ethiopian Heirloom",
    "notes": "wild, velvety, mushroom, strawberry, soy sauce",
    "intensifier": "structured"
  },
  {
    "id": 5291,
    "uid": "1478d0d8-2ba1-4ed0-8dd5-bca7e94b1a8a",
    "blend_name": "Kreb-Full-o Equinox",
    "origin": "Cundinamarca, Colombia",
    "variety": "Pacas",
    "notes": "dull, juicy, grassy, granola, mint",
    "intensifier": "unbalanced"
  },
  {
    "id": 6793,
    "uid": "03af7cdf-855c-4553-8434-4fc5c4e7907e",
    "blend_name": "Kreb-Full-o Bean",
    "origin": "Tres Rios, Costa Rica",
    "variety": "Mundo Novo",
    "notes": "sharp, creamy, black-tea, sugar cane, papaya",
    "intensifier": "soft"
  },
  {
    "id": 8234,
    "uid": "eade788c-7e2d-4383-a72c-20a9b94b039c",
    "blend_name": "Postmodern Been",
    "origin": "Northern Region, Oldeani, Tanzania",
    "variety": "San Ramon",
    "notes": "dirty, slick, pineapple, sweet pea, orange blossom",
    "intensifier": "juicy"
  },
  {
    "id": 8144,
    "uid": "9136b2b2-d8b8-4809-9533-2b8e8405ad8c",
    "blend_name": "Captain's Cup",
    "origin": "Embu, Kenya",
    "variety": "Red Bourbon",
    "notes": "wild, tea-like, mandarin, leafy greens, lychee",
    "intensifier": "dry"
  },
  {
    "id": 1955,
    "uid": "f3921d2e-8614-4526-93b9-29b034e6e7dc",
    "blend_name": "Major Utopia",
    "origin": "Raimi, Yemen",
    "variety": "Gesha",
    "notes": "astringent, velvety, curry, lemon, dill",
    "intensifier": "vibrant"
  },
  {
    "id": 8774,
    "uid": "7850bd09-5356-42e4-bdea-a6a229067a33",
    "blend_name": "Huggy Breaker",
    "origin": "Lake Kivu Region, Rwanda",
    "variety": "Villa Sarchi",
    "notes": "muted, velvety, raspberry, mushroom, plum",
    "intensifier": "deep"
  },
  {
    "id": 884,
    "uid": "bf0f0e64-e0f5-4ec9-992e-83a8ff19e495",
    "blend_name": "Split Light",
    "origin": "Gayo, Sumatra",
    "variety": "SL34",
    "notes": "clean, watery, musty, lemonade, medicinal",
    "intensifier": "wild"
  },
  {
    "id": 7633,
    "uid": "86440b76-fca9-4ae8-9061-34d3dd410863",
    "blend_name": "Street America",
    "origin": "Tecapa-Chinameca, El Salvador",
    "variety": "Sarchimor",
    "notes": "soft, silky, white grape, lavender, green grape",
    "intensifier": "astringent"
  },
  {
    "id": 5261,
    "uid": "3efe163a-02ed-4bcc-8cfc-9374e4d013f4",
    "blend_name": "Thanksgiving Utopia",
    "origin": "Lake Kivu Region, Rwanda",
    "variety": "Kona",
    "notes": "juicy, full, jasmine, carbon, hazelnut",
    "intensifier": "deep"
  },
  {
    "id": 9288,
    "uid": "36c9f62b-3fc3-4d92-8239-827faec16c41",
    "blend_name": "The Enlightenment",
    "origin": "Mattari, Yemen",
    "variety": "Kent",
    "notes": "mild, syrupy, peach, squash, butter",
    "intensifier": "crisp"
  },
  {
    "id": 1728,
    "uid": "5a208532-b77f-44e3-b919-d818e6547845",
    "blend_name": "Spilt Nuts",
    "origin": "Chiriqui, Panama",
    "variety": "Java",
    "notes": "crisp, smooth, corriander, apricot, tangerine",
    "intensifier": "vibrant"
  },
  {
    "id": 5200,
    "uid": "840d0b54-71b4-49a3-90d2-a8cb5bb445ff",
    "blend_name": "Red Light",
    "origin": "Guanacaste, Costa Rica",
    "variety": "Villa Sarchi",
    "notes": "dull, tea-like, magnolia, cola, white pepper",
    "intensifier": "pointed"
  },
  {
    "id": 8313,
    "uid": "30949860-4139-4676-9716-37a95315435d",
    "blend_name": "Joe Utopia",
    "origin": "Raimi, Yemen",
    "variety": "Typica",
    "notes": "bright, full, corriander, cacao nibs, fresh bread",
    "intensifier": "balanced"
  },
  {
    "id": 1631,
    "uid": "dd8a6e43-9ddb-4070-96e1-cd8302100c4e",
    "blend_name": "Reg's Select",
    "origin": "Opalca, Honduras",
    "variety": "Yellow Bourbon",
    "notes": "astringent, juicy, grassy, mango, peach",
    "intensifier": "vibrant"
  },
  {
    "id": 5924,
    "uid": "1f720f35-f61a-4f81-9b6a-52eb71386063",
    "blend_name": "Blacktop Pie",
    "origin": "Lake Tawar, Sumatra",
    "variety": "Kaffa",
    "notes": "lingering, silky, mushroom, lychee, curry",
    "intensifier": "structured"
  },
  {
    "id": 3313,
    "uid": "5fe14bd2-73e8-4c29-9074-c5757cc1a6e2",
    "blend_name": "Wake-up Choice",
    "origin": "Northern Region, Oldeani, Tanzania",
    "variety": "Caturra",
    "notes": "faint, smooth, grassy, sweet pea, corriander",
    "intensifier": "wild"
  },
  {
    "id": 9830,
    "uid": "9cb981c6-90a7-4186-8b21-d7517281bbc8",
    "blend_name": "Wake-up Treat",
    "origin": "San Marcos, Guatemala",
    "variety": "Obata",
    "notes": "bright, velvety, clove, prune, lime",
    "intensifier": "faint"
  },
  {
    "id": 9738,
    "uid": "7a46a5c6-dbc8-4580-9ed0-aef39aafd7cb",
    "blend_name": "Morning Star",
    "origin": "Boquete, Panama",
    "variety": "Kaffa",
    "notes": "bright, syrupy, pecan, mushroom, dates",
    "intensifier": "mild"
  },
  {
    "id": 8476,
    "uid": "401865d0-38a2-4976-8533-75d0c433f2e4",
    "blend_name": "Cascara America",
    "origin": "Nilgiris, India",
    "variety": "Liberica",
    "notes": "balanced, creamy, lemonade, red currant, dill",
    "intensifier": "sharp"
  },
  {
    "id": 4357,
    "uid": "6c4c3b93-05a4-41fc-a7e0-107f56b830a7",
    "blend_name": "Joe Pie",
    "origin": "Sul Minas, Brazil",
    "variety": "Villalobos",
    "notes": "juicy, big, plum, papaya, red currant",
    "intensifier": "crisp"
  },
  {
    "id": 2040,
    "uid": "d2fef77c-7624-4039-9e7e-60b8bdbf6f35",
    "blend_name": "Blacktop Town",
    "origin": "Granada, Nicaragua",
    "variety": "Mokka",
    "notes": "delicate, full, papaya, mushroom, white grape",
    "intensifier": "crisp"
  },
  {
    "id": 1790,
    "uid": "5514dbd3-7dac-4f86-bc05-a1b61b9a18c4",
    "blend_name": "Red Mug",
    "origin": "Guanacaste, Costa Rica",
    "variety": "Mokka",
    "notes": "juicy, tea-like, brown sugar, pecan, peach",
    "intensifier": "astringent"
  },
  {
    "id": 9367,
    "uid": "4875fa29-7a2d-4168-91ff-b25f8504f315",
    "blend_name": "Seattle Treat",
    "origin": "Hirazi, Yemen",
    "variety": "Blue Mountain",
    "notes": "unbalanced, chewy, potato defect!, lemon, lychee",
    "intensifier": "wild"
  },
  {
    "id": 263,
    "uid": "c1a8f56d-4595-46e3-9b0e-10e3168db478",
    "blend_name": "Goodbye Extract",
    "origin": "Hirazi, Yemen",
    "variety": "Villa Sarchi",
    "notes": "dull, silky, clove, bittersweet chocolate, marshmallow",
    "intensifier": "dense"
  },
  {
    "id": 9613,
    "uid": "bbcd0401-c7e2-4e03-a7d5-b79f49468c48",
    "blend_name": "Jacked America",
    "origin": "Kayanza, Burundi",
    "variety": "S288",
    "notes": "tart, coating, walnut, cinnamon, clementine",
    "intensifier": "balanced"
  },
  {
    "id": 3662,
    "uid": "8cf1d2ac-e939-45a0-893b-88890b69b632",
    "blend_name": "Wake-up Utopia",
    "origin": "Gayo, Sumatra",
    "variety": "S.4",
    "notes": "crisp, watery, banana, marzipan, olive",
    "intensifier": "structured"
  },
  {
    "id": 6851,
    "uid": "7ed703ff-2218-4717-bd25-fae18e2eb2b2",
    "blend_name": "Reg's Symphony",
    "origin": "Mogiana, Brazil",
    "variety": "San Ramon",
    "notes": "mild, round, carbon, olive, lemonade",
    "intensifier": "rounded"
  }
];

class MockCoffeeService {
  getCoffeeList$() {
    return of(mockData);
  }
}


describe('RootEffects', () => {
  let actions$: Observable<any>;
  let effects: RootEffects;
  let store: MockStore<RootState>;
  let httpService: CoffeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RootEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
        { provide: CoffeeService, useClass: MockCoffeeService },
      ],
    });

    effects = TestBed.inject(RootEffects);
    store = TestBed.inject(MockStore);
    httpService = TestBed.inject(CoffeeService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  // Testing API interaction
  describe('getMockDataEffect$', () => {
    it('should fire if users is null', (done) => {
      const spy = spyOn(httpService, 'getCoffeeList$').and.callThrough();
      actions$ = of(ApiGetMockData);
      effects.getMockDataEffect$.subscribe((res) => {
        expect(res).toEqual(ApiSuccess({ data: mockData }));
        expect(spy).toHaveBeenCalledTimes(1);
        done();
      });
    });
  });
});
