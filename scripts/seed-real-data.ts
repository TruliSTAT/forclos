/**
 * seed-real-data.ts
 * Generates 10,000+ realistic foreclosure/tax-sale listings for Forclos.
 * Run: DATABASE_URL=... npx ts-node --compiler-options '{"module":"CommonJS"}' scripts/seed-real-data.ts
 */
import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

// ─── HELPERS ────────────────────────────────────────────────────────────────

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
function randFloat(min: number, max: number, decimals = 2) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(decimals))
}
function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}
function futureDate(daysMin: number, daysMax: number): Date {
  const d = new Date()
  d.setDate(d.getDate() + rand(daysMin, daysMax))
  return d
}
function pastDate(daysMin: number, daysMax: number): Date {
  const d = new Date()
  d.setDate(d.getDate() - rand(daysMin, daysMax))
  return d
}
function caseNo(): string {
  const year = rand(2023, 2025)
  return `${year}-CA-${String(rand(1000, 99999)).padStart(5, '0')}`
}
function certNo(): string {
  return `${rand(2022, 2025)}-${String(rand(10000, 99999))}`
}
function parcelId(county: string): string {
  const prefix = county.slice(0, 2).toUpperCase()
  return `${prefix}-${rand(10, 99)}-${rand(1000, 9999)}-${rand(100, 999)}`
}
function streetName(): string {
  const names = [
    'Oak','Maple','Pine','Elm','Cedar','Willow','Birch','Ash','Walnut','Cherry',
    'Rose','Lily','Violet','Daisy','Jasmine','Magnolia','Cypress','Pecan','Sycamore',
    'Main','Park','Lake','River','Spring','Summer','Autumn','Winter','Sunset','Sunrise',
    'Highland','Meadow','Valley','Ridge','Brook','Creek','Forest','Garden','Harbor',
    'Windsor','Fairview','Lakewood','Brookside','Hillcrest','Greenwood','Riverside',
    'Briarwood','Stonegate','Foxcroft','Pinewood','Clearwater','Northgate','Southview',
  ]
  const suffixes = ['St','Ave','Blvd','Dr','Rd','Ln','Way','Ct','Pl','Cir','Pkwy','Trl']
  return `${rand(100, 9999)} ${pick(names)} ${pick(suffixes)}`
}

const PROPERTY_TYPES = ['Single Family','Condo','Townhouse','Multi-Family','Vacant Land','Commercial']
const LENDERS = [
  'Bank of America','Wells Fargo','JPMorgan Chase','Citibank','US Bank',
  'PNC Bank','Truist','Regions Bank','SunTrust','TD Bank','Fifth Third',
  'KeyBank','M&T Bank','Comerica','First Republic','Flagstar Bank',
  'Freedom Mortgage','Caliber Home Loans','loanDepot','Mr. Cooper',
  'Rocket Mortgage','United Wholesale Mortgage','Guild Mortgage',
]
const AUCTION_PLATFORMS = ['realforeclose.com','bid4assets.com','realauction.com','govease.com','xome.com','auction.com','hubzu.com']
const FC_TYPES = ['judicial','non-judicial','sheriff-sale']

// ─── TOP 20 COUNTY DEFINITIONS ───────────────────────────────────────────────

type CountyDef = {
  county: string
  state: string
  type: 'foreclosure' | 'tax-deed' | 'tax-lien'
  cities: string[]
  zips: string[]
  count: number
  bidRange: [number, number]
  valueRange: [number, number]
  interestRate?: number
  platform?: string
  saleType?: 'lien' | 'deed'
}

const TOP_COUNTIES: CountyDef[] = [
  // TX
  {
    county: 'Dallas', state: 'TX', type: 'tax-deed', count: 600,
    cities: ['Dallas','Garland','Irving','Mesquite','Carrollton','Richardson','Grand Prairie','Plano','Duncanville','Balch Springs'],
    zips: ['75201','75202','75203','75206','75208','75210','75214','75220','75224','75228','75230','75235','75240','75243','75246'],
    bidRange: [15000, 250000], valueRange: [80000, 450000],
    saleType: 'deed', platform: 'bid4assets.com',
  },
  {
    county: 'Harris', state: 'TX', type: 'tax-deed', count: 700,
    cities: ['Houston','Pasadena','Baytown','Pearland','Sugar Land','Spring','Katy','La Porte','Webster','Friendswood'],
    zips: ['77001','77002','77004','77006','77008','77011','77019','77022','77025','77028','77032','77040','77045','77050','77055'],
    bidRange: [12000, 300000], valueRange: [70000, 500000],
    saleType: 'deed', platform: 'bid4assets.com',
  },
  {
    county: 'Travis', state: 'TX', type: 'tax-deed', count: 400,
    cities: ['Austin','Round Rock','Cedar Park','Georgetown','Pflugerville','Kyle','Buda','Manor','Lakeway'],
    zips: ['78701','78702','78703','78704','78723','78724','78725','78726','78727','78728','78729','78730','78731','78741','78745'],
    bidRange: [25000, 450000], valueRange: [150000, 800000],
    saleType: 'deed', platform: 'bid4assets.com',
  },
  // FL
  {
    county: 'Miami-Dade', state: 'FL', type: 'foreclosure', count: 700,
    cities: ['Miami','Hialeah','Coral Gables','Homestead','North Miami','Miami Beach','Doral','Aventura','Kendall','Cutler Bay'],
    zips: ['33101','33125','33127','33128','33130','33131','33132','33135','33138','33140','33145','33150','33156','33165','33175'],
    bidRange: [30000, 600000], valueRange: [150000, 1200000],
    platform: 'miamidade.realforeclose.com',
  },
  {
    county: 'Broward', state: 'FL', type: 'foreclosure', count: 600,
    cities: ['Fort Lauderdale','Hollywood','Pembroke Pines','Miramar','Coral Springs','Pompano Beach','Davie','Plantation','Sunrise','Deerfield Beach'],
    zips: ['33004','33009','33019','33020','33023','33026','33028','33060','33063','33065','33071','33073','33076','33309','33312'],
    bidRange: [25000, 500000], valueRange: [120000, 900000],
    platform: 'broward.realforeclose.com',
  },
  {
    county: 'Palm Beach', state: 'FL', type: 'foreclosure', count: 500,
    cities: ['West Palm Beach','Boca Raton','Boynton Beach','Delray Beach','Wellington','Lake Worth','Jupiter','Palm Beach Gardens','Greenacres','Royal Palm Beach'],
    zips: ['33401','33405','33406','33407','33409','33411','33414','33417','33426','33431','33433','33435','33437','33458','33460'],
    bidRange: [30000, 700000], valueRange: [150000, 1500000],
    platform: 'palmbeach.realforeclose.com',
  },
  {
    county: 'Orange', state: 'FL', type: 'foreclosure', count: 500,
    cities: ['Orlando','Kissimmee','Winter Park','Apopka','Ocoee','Winter Garden','Maitland','Deltona','Longwood','Altamonte Springs'],
    zips: ['32801','32803','32806','32808','32809','32811','32814','32817','32819','32822','32824','32827','32828','32835','32839'],
    bidRange: [20000, 400000], valueRange: [100000, 700000],
    platform: 'orange.realforeclose.com',
  },
  // CA
  {
    county: 'Los Angeles', state: 'CA', type: 'tax-deed', count: 600,
    cities: ['Los Angeles','Long Beach','Glendale','Pomona','Torrance','Pasadena','El Monte','Inglewood','West Covina','Norwalk'],
    zips: ['90001','90011','90019','90022','90029','90033','90044','90047','90059','90068','90210','90220','90230','90247','90280'],
    bidRange: [50000, 800000], valueRange: [300000, 2000000],
    saleType: 'deed', platform: 'bid4assets.com',
  },
  {
    county: 'San Diego', state: 'CA', type: 'tax-deed', count: 400,
    cities: ['San Diego','Chula Vista','El Cajon','Escondido','Oceanside','Carlsbad','Vista','Santee','Spring Valley','La Mesa'],
    zips: ['92020','92027','92037','92040','92054','92057','92069','92071','92101','92103','92104','92115','92121','92127','92131'],
    bidRange: [40000, 700000], valueRange: [250000, 1500000],
    saleType: 'deed', platform: 'bid4assets.com',
  },
  // NY
  {
    county: 'Kings', state: 'NY', type: 'foreclosure', count: 500,
    cities: ['Brooklyn','Flatbush','Bay Ridge','Bushwick','Crown Heights','Williamsburg','Brownsville','East New York','Sunset Park','Bensonhurst'],
    zips: ['11201','11203','11204','11205','11207','11208','11210','11211','11212','11213','11215','11216','11218','11220','11221'],
    bidRange: [80000, 1200000], valueRange: [400000, 3000000],
    platform: 'realauction.com',
  },
  {
    county: 'Queens', state: 'NY', type: 'foreclosure', count: 500,
    cities: ['Jamaica','Flushing','Astoria','Forest Hills','Jackson Heights','Richmond Hill','Far Rockaway','Howard Beach','Springfield Gardens','Hollis'],
    zips: ['11004','11101','11102','11103','11354','11355','11368','11370','11373','11374','11375','11377','11385','11413','11420'],
    bidRange: [70000, 1000000], valueRange: [350000, 2500000],
    platform: 'realauction.com',
  },
  // GA
  {
    county: 'Fulton', state: 'GA', type: 'tax-deed', count: 400,
    cities: ['Atlanta','Sandy Springs','Alpharetta','Roswell','Milton','College Park','East Point','Union City','Hapeville','Fairburn'],
    zips: ['30301','30303','30305','30308','30309','30310','30311','30312','30313','30314','30318','30319','30322','30324','30326'],
    bidRange: [15000, 350000], valueRange: [80000, 700000],
    saleType: 'deed', platform: 'sriservices.com',
  },
  {
    county: 'Gwinnett', state: 'GA', type: 'tax-deed', count: 350,
    cities: ['Lawrenceville','Duluth','Norcross','Lilburn','Buford','Suwanee','Snellville','Stone Mountain','Dacula','Grayson'],
    zips: ['30004','30017','30024','30039','30040','30041','30043','30044','30045','30046','30047','30052','30071','30078','30096'],
    bidRange: [12000, 280000], valueRange: [70000, 550000],
    saleType: 'deed', platform: 'sriservices.com',
  },
  // AZ
  {
    county: 'Maricopa', state: 'AZ', type: 'tax-lien', count: 500,
    cities: ['Phoenix','Scottsdale','Mesa','Chandler','Tempe','Glendale','Peoria','Surprise','Goodyear','Gilbert'],
    zips: ['85001','85004','85006','85007','85009','85013','85017','85020','85029','85032','85040','85044','85050','85051','85053'],
    bidRange: [800, 18000], valueRange: [120000, 500000],
    interestRate: 16, saleType: 'lien', platform: 'govease.com',
  },
  // CO
  {
    county: 'Denver', state: 'CO', type: 'tax-lien', count: 350,
    cities: ['Denver','Aurora','Lakewood','Thornton','Arvada','Westminster','Centennial','Boulder','Highlands Ranch','Commerce City'],
    zips: ['80202','80204','80206','80207','80209','80210','80211','80214','80219','80220','80221','80223','80224','80226','80227'],
    bidRange: [500, 15000], valueRange: [200000, 600000],
    interestRate: 9, saleType: 'lien', platform: 'govease.com',
  },
  // NJ
  {
    county: 'Essex', state: 'NJ', type: 'tax-lien', count: 350,
    cities: ['Newark','East Orange','Irvington','Bloomfield','Montclair','Livingston','Maplewood','South Orange','West Orange','Belleville'],
    zips: ['07017','07018','07028','07039','07040','07041','07042','07043','07044','07050','07052','07104','07105','07107','07108'],
    bidRange: [1000, 25000], valueRange: [100000, 500000],
    interestRate: 18, saleType: 'lien', platform: 'realauction.com',
  },
  // IL
  {
    county: 'Cook', state: 'IL', type: 'foreclosure', count: 400,
    cities: ['Chicago','Evanston','Oak Park','Cicero','Skokie','Berwyn','Calumet City','Harvey','Waukegan','Elgin'],
    zips: ['60601','60605','60608','60612','60615','60617','60619','60621','60624','60628','60629','60630','60632','60636','60637'],
    bidRange: [10000, 200000], valueRange: [50000, 450000],
    platform: 'realauction.com',
  },
  // PA
  {
    county: 'Philadelphia', state: 'PA', type: 'foreclosure', count: 400,
    cities: ['Philadelphia','Cheltenham','Abington','Springfield','Darby','Upper Darby','Lansdowne','Sharon Hill','Glenolden','Folcroft'],
    zips: ['19101','19103','19104','19106','19107','19111','19114','19115','19116','19118','19120','19121','19123','19124','19125'],
    bidRange: [8000, 180000], valueRange: [40000, 400000],
    platform: 'bid4assets.com',
  },
  // OH
  {
    county: 'Cuyahoga', state: 'OH', type: 'foreclosure', count: 350,
    cities: ['Cleveland','Parma','Lakewood','Euclid','Strongsville','North Olmsted','Westlake','Brook Park','Maple Heights','Garfield Heights'],
    zips: ['44101','44102','44103','44104','44105','44106','44107','44108','44109','44111','44112','44113','44114','44120','44121'],
    bidRange: [5000, 120000], valueRange: [30000, 250000],
    platform: 'cuyahoga.sheriffsalesonline.com',
  },
  // MI
  {
    county: 'Wayne', state: 'MI', type: 'tax-deed', count: 350,
    cities: ['Detroit','Dearborn','Livonia','Westland','Taylor','Warren','Sterling Heights','Southfield','Royal Oak','Troy'],
    zips: ['48201','48202','48203','48204','48205','48206','48207','48208','48209','48210','48211','48212','48213','48214','48215'],
    bidRange: [3000, 80000], valueRange: [20000, 200000],
    saleType: 'deed', platform: 'bid4assets.com',
  },
]

// Extra counties for volume padding (to reach 10K total)
const EXTRA_COUNTIES: CountyDef[] = [
  { county:'Pinellas',state:'FL',type:'foreclosure',count:200,cities:['St. Petersburg','Clearwater','Largo','Dunedin','Tarpon Springs'],zips:['33701','33702','33755','33756','33759'],bidRange:[20000,350000],valueRange:[100000,600000],platform:'pinellas.realforeclose.com' },
  { county:'Hillsborough',state:'FL',type:'foreclosure',count:200,cities:['Tampa','Brandon','Plant City','Riverview','Temple Terrace'],zips:['33601','33602','33603','33604','33605'],bidRange:[20000,400000],valueRange:[100000,700000],platform:'hillsborough.realforeclose.com' },
  { county:'Pima',state:'AZ',type:'tax-lien',count:150,cities:['Tucson','Marana','Sahuarita','Oro Valley','South Tucson'],zips:['85701','85706','85710','85711','85712'],bidRange:[400,12000],valueRange:[80000,350000],interestRate:16,saleType:'lien',platform:'govease.com' },
  { county:'Jefferson',state:'CO',type:'tax-lien',count:150,cities:['Lakewood','Arvada','Wheat Ridge','Golden','Littleton'],zips:['80215','80002','80033','80401','80120'],bidRange:[500,14000],valueRange:[180000,550000],interestRate:9,saleType:'lien',platform:'govease.com' },
  { county:'San Bernardino',state:'CA',type:'tax-deed',count:200,cities:['San Bernardino','Fontana','Moreno Valley','Rancho Cucamonga','Ontario'],zips:['92401','92336','92553','91730','91761'],bidRange:[30000,400000],valueRange:[150000,700000],saleType:'deed',platform:'bid4assets.com' },
  { county:'Riverside',state:'CA',type:'tax-deed',count:200,cities:['Riverside','Moreno Valley','Corona','Murrieta','Temecula'],zips:['92501','92553','92879','92562','92590'],bidRange:[25000,380000],valueRange:[140000,650000],saleType:'deed',platform:'bid4assets.com' },
  { county:'DeKalb',state:'GA',type:'tax-deed',count:150,cities:['Decatur','Stone Mountain','Lithonia','Tucker','Clarkston'],zips:['30030','30083','30058','30084','30021'],bidRange:[10000,220000],valueRange:[60000,450000],saleType:'deed',platform:'sriservices.com' },
  { county:'Franklin',state:'OH',type:'foreclosure',count:150,cities:['Columbus','Dublin','Westerville','Grove City','Gahanna'],zips:['43201','43215','43016','43081','43123'],bidRange:[8000,180000],valueRange:[40000,350000],platform:'franklin.sheriffsalesonline.com' },
  { county:'Tarrant',state:'TX',type:'tax-deed',count:150,cities:['Fort Worth','Arlington','Mansfield','North Richland Hills','Hurst'],zips:['76101','76010','76063','76180','76053'],bidRange:[12000,200000],valueRange:[60000,400000],saleType:'deed',platform:'bid4assets.com' },
  { county:'Bexar',state:'TX',type:'tax-deed',count:150,cities:['San Antonio','Converse','Leon Valley','Helotes','Live Oak'],zips:['78201','78209','78218','78249','78233'],bidRange:[10000,180000],valueRange:[55000,380000],saleType:'deed',platform:'bid4assets.com' },
  { county:'Bergen',state:'NJ',type:'tax-lien',count:120,cities:['Hackensack','Paramus','Fair Lawn','Englewood','Teaneck'],zips:['07601','07652','07410','07631','07666'],bidRange:[1500,30000],valueRange:[200000,700000],interestRate:18,saleType:'lien',platform:'realauction.com' },
  { county:'Hudson',state:'NJ',type:'tax-lien',count:120,cities:['Jersey City','Hoboken','Union City','Bayonne','North Bergen'],zips:['07302','07030','07087','07002','07047'],bidRange:[1200,22000],valueRange:[150000,600000],interestRate:18,saleType:'lien',platform:'realauction.com' },
  { county:'DuPage',state:'IL',type:'tax-deed',count:120,cities:['Naperville','Wheaton','Downers Grove','Elmhurst','Addison'],zips:['60540','60187','60515','60126','60101'],bidRange:[8000,160000],valueRange:[80000,350000],saleType:'deed',platform:'bid4assets.com' },
  { county:'Manatee',state:'FL',type:'foreclosure',count:120,cities:['Bradenton','Palmetto','Lakewood Ranch','Sarasota'],zips:['34201','34221','34211','34231'],bidRange:[18000,320000],valueRange:[90000,600000],platform:'manatee.realforeclose.com' },
  { county:'Lee',state:'FL',type:'foreclosure',count:120,cities:['Cape Coral','Fort Myers','Bonita Springs','Estero','Lehigh Acres'],zips:['33901','33907','33928','33928','33936'],bidRange:[18000,350000],valueRange:[90000,650000],platform:'lee.realforeclose.com' },
  { county:'Arapahoe',state:'CO',type:'tax-lien',count:100,cities:['Aurora','Centennial','Englewood','Littleton','Glendale'],zips:['80012','80112','80110','80120','80246'],bidRange:[400,12000],valueRange:[160000,480000],interestRate:9,saleType:'lien',platform:'govease.com' },
  { county:'Montgomery',state:'OH',type:'foreclosure',count:100,cities:['Dayton','Kettering','Huber Heights','Riverside','Trotwood'],zips:['45402','45429','45424','45431','45426'],bidRange:[4000,100000],valueRange:[25000,200000],platform:'montgomery.sheriffsalesonline.com' },
  { county:'Hamilton',state:'OH',type:'foreclosure',count:100,cities:['Cincinnati','Blue Ash','Montgomery','Norwood','Delhi Township'],zips:['45201','45241','45242','45212','45238'],bidRange:[5000,120000],valueRange:[30000,250000],platform:'hamilton.sheriffsalesonline.com' },
  { county:'Pinal',state:'AZ',type:'tax-lien',count:100,cities:['Casa Grande','Apache Junction','Maricopa','Coolidge','Queen Creek'],zips:['85122','85119','85138','85128','85142'],bidRange:[300,8000],valueRange:[60000,280000],interestRate:16,saleType:'lien',platform:'govease.com' },
  { county:'Sacramento',state:'CA',type:'tax-deed',count:150,cities:['Sacramento','Elk Grove','Citrus Heights','Rancho Cordova','Folsom'],zips:['95814','95758','95621','95670','95630'],bidRange:[30000,450000],valueRange:[150000,700000],saleType:'deed',platform:'bid4assets.com' },
]

// ─── CORE GENERATOR ─────────────────────────────────────────────────────────

async function generateListingsForCounty(def: CountyDef): Promise<number> {
  let saved = 0
  const batchSize = 50
  const batches = Math.ceil(def.count / batchSize)

  for (let b = 0; b < batches; b++) {
    const batchCount = Math.min(batchSize, def.count - b * batchSize)
    
    const propertyCreates = Array.from({ length: batchCount }, () => {
      const propType = pick(PROPERTY_TYPES)
      const isCondo = propType === 'Condo' || propType === 'Townhouse'
      const sqft = isCondo ? rand(600, 1800) : rand(900, 3500)
      return {
        address: streetName(),
        city: pick(def.cities),
        county: def.county,
        state: def.state,
        zip: pick(def.zips),
        parcelId: parcelId(def.county),
        propertyType: propType,
        bedrooms: propType === 'Vacant Land' || propType === 'Commercial' ? null : rand(1, 6),
        bathrooms: propType === 'Vacant Land' || propType === 'Commercial' ? null : randFloat(1, 4, 1),
        sqft: propType === 'Vacant Land' ? null : sqft,
        lotSizeAcres: randFloat(0.1, propType === 'Vacant Land' ? 5.0 : 0.5),
        yearBuilt: rand(1955, 2018),
        garage: Math.random() > 0.3,
        pool: def.state === 'FL' || def.state === 'AZ' || def.state === 'CA' ? Math.random() > 0.6 : Math.random() > 0.85,
      }
    })

    // Create properties in batch
    const properties: { id: string }[] = []
    for (const p of propertyCreates) {
      const created = await db.property.create({ data: p })
      properties.push(created)
    }

    // Create listings
    if (def.type === 'foreclosure') {
      const listings = properties.map((prop) => {
        const bid = randFloat(def.bidRange[0], def.bidRange[1], 0)
        const value = randFloat(Math.max(bid * 1.1, def.valueRange[0]), def.valueRange[1], 0)
        const equity = Math.round(((value - bid) / value) * 100 * 10) / 10
        const auctionDate = futureDate(7, 180)
        const filingDate = pastDate(30, 720)
        return {
          propertyId: prop.id,
          caseNumber: caseNo(),
          auctionDate,
          openingBid: bid,
          assessedValue: randFloat(value * 0.7, value * 0.9, 0),
          estimatedValue: value,
          equityPct: equity,
          status: Math.random() > 0.1 ? 'scheduled' : pick(['cancelled', 'postponed']),
          foreclosureType: pick(FC_TYPES),
          defaultAmount: randFloat(bid * 0.8, bid * 1.2, 0),
          originalLoanAmount: randFloat(value * 0.6, value * 0.95, 0),
          lender: pick(LENDERS),
          auctionType: Math.random() > 0.5 ? 'online' : 'in-person',
          auctionPlatform: def.platform || pick(AUCTION_PLATFORMS),
          filingDate,
          daysSinceFiling: Math.floor((Date.now() - filingDate.getTime()) / (1000 * 60 * 60 * 24)),
          sourceUrl: def.platform ? `https://${def.platform}/case/${caseNo()}` : undefined,
        }
      })
      await db.foreclosureListing.createMany({ data: listings })
    } else if (def.type === 'tax-deed') {
      const listings = properties.map((prop) => {
        const lienAmount = randFloat(def.bidRange[0], def.bidRange[1], 0)
        const value = randFloat(Math.max(lienAmount * 2, def.valueRange[0]), def.valueRange[1], 0)
        const roi = Math.round(((value - lienAmount) / lienAmount) * 100 * 10) / 10
        const saleDate = futureDate(14, 200)
        return {
          propertyId: prop.id,
          saleType: 'deed',
          certificateNumber: certNo(),
          yearOfTax: rand(2019, 2023),
          lienAmount,
          taxDelinquencyAmount: randFloat(lienAmount * 1.05, lienAmount * 1.3, 0),
          yearsDelinquent: rand(1, 5),
          interestRate: def.interestRate || rand(12, 20),
          redemptionPeriodMonths: pick([12, 24, 36, 48]),
          overbidAllowed: Math.random() > 0.3,
          subsequentTaxesAllowed: Math.random() > 0.4,
          saleDate,
          assessedValue: randFloat(value * 0.65, value * 0.85, 0),
          estimatedValue: value,
          estimatedRoi: roi,
          status: 'available',
          county: def.county,
          state: def.state,
          auctionType: Math.random() > 0.4 ? 'online' : 'in-person',
          auctionPlatform: def.platform || pick(AUCTION_PLATFORMS),
          sourceUrl: def.platform ? `https://${def.platform}/sale/${certNo()}` : undefined,
        }
      })
      await db.taxSaleListing.createMany({ data: listings })
    } else if (def.type === 'tax-lien') {
      const listings = properties.map((prop) => {
        const lienAmount = randFloat(def.bidRange[0], def.bidRange[1], 0)
        const value = randFloat(Math.max(lienAmount * 8, def.valueRange[0]), def.valueRange[1], 0)
        const interestRate = def.interestRate || 18
        const roi = parseFloat((((lienAmount * interestRate / 100) / lienAmount) * 100).toFixed(1))
        const saleDate = futureDate(7, 120)
        return {
          propertyId: prop.id,
          saleType: 'lien',
          certificateNumber: certNo(),
          yearOfTax: rand(2020, 2024),
          lienAmount,
          taxDelinquencyAmount: randFloat(lienAmount * 1.05, lienAmount * 1.2, 0),
          yearsDelinquent: rand(1, 3),
          interestRate,
          certificateRate: interestRate,
          stateInterestRate: interestRate,
          penaltyRate: randFloat(1, 5, 1),
          redemptionPeriodMonths: pick([12, 24, 36]),
          overbidAllowed: true,
          subsequentTaxesAllowed: true,
          saleDate,
          assessedValue: randFloat(value * 0.65, value * 0.85, 0),
          estimatedValue: value,
          estimatedRoi: roi,
          status: 'available',
          county: def.county,
          state: def.state,
          auctionType: 'online',
          auctionPlatform: def.platform || 'govease.com',
          sourceUrl: def.platform ? `https://${def.platform}/listing/${certNo()}` : undefined,
        }
      })
      await db.taxSaleListing.createMany({ data: listings })
    }

    saved += batchCount
  }

  return saved
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('🌱 Starting Forclos seed — generating 10K+ realistic listings...\n')

  // Check existing counts
  const existingFc = await db.foreclosureListing.count()
  const existingTx = await db.taxSaleListing.count()
  console.log(`Existing: ${existingFc} foreclosures, ${existingTx} tax sales\n`)

  const allCounties = [...TOP_COUNTIES, ...EXTRA_COUNTIES]
  let totalSaved = 0

  for (const def of allCounties) {
    process.stdout.write(`  ${def.county} ${def.state} (${def.type}, ${def.count} listings)... `)
    try {
      const saved = await generateListingsForCounty(def)
      totalSaved += saved
      console.log(`✓ ${saved}`)
    } catch (err) {
      console.log(`✗ ${err instanceof Error ? err.message : String(err)}`)
    }
  }

  const finalFc = await db.foreclosureListing.count()
  const finalTx = await db.taxSaleListing.count()
  const finalProps = await db.property.count()

  console.log(`\n✅ Seed complete!`)
  console.log(`   Properties: ${finalProps}`)
  console.log(`   Foreclosures: ${finalFc}`)
  console.log(`   Tax sales: ${finalTx}`)
  console.log(`   Total listings: ${finalFc + finalTx}`)
  console.log(`   New records this run: ${totalSaved}`)
}

main()
  .catch(console.error)
  .finally(() => db.$disconnect())
