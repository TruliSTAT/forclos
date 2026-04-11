import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

const scrapers = [
  // ─── FLORIDA (RealAuction — all 67 counties) ───────────────────────────────
  { name: 'Alachua County FL Foreclosure', state: 'FL', county: 'Alachua', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'alachua', baseUrl: 'https://alachua.realforeclose.com' }, sourceUrl: 'https://alachua.realforeclose.com' },
  { name: 'Broward County FL Foreclosure', state: 'FL', county: 'Broward', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'broward', baseUrl: 'https://broward.realforeclose.com' }, sourceUrl: 'https://broward.realforeclose.com' },
  { name: 'Miami-Dade County FL Foreclosure', state: 'FL', county: 'Miami-Dade', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'miamidade', baseUrl: 'https://miamidade.realforeclose.com' }, sourceUrl: 'https://miamidade.realforeclose.com' },
  { name: 'Palm Beach County FL Foreclosure', state: 'FL', county: 'Palm Beach', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'palmbeach', baseUrl: 'https://palmbeach.realforeclose.com' }, sourceUrl: 'https://palmbeach.realforeclose.com' },
  { name: 'Orange County FL Foreclosure', state: 'FL', county: 'Orange', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'orange', baseUrl: 'https://orange.realforeclose.com' }, sourceUrl: 'https://orange.realforeclose.com' },
  { name: 'Hillsborough County FL Foreclosure', state: 'FL', county: 'Hillsborough', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'hillsborough', baseUrl: 'https://hillsborough.realforeclose.com' }, sourceUrl: 'https://hillsborough.realforeclose.com' },
  { name: 'Pinellas County FL Foreclosure', state: 'FL', county: 'Pinellas', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'pinellas', baseUrl: 'https://pinellas.realforeclose.com' }, sourceUrl: 'https://pinellas.realforeclose.com' },
  { name: 'Lee County FL Foreclosure', state: 'FL', county: 'Lee', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'lee', baseUrl: 'https://lee.realforeclose.com' }, sourceUrl: 'https://lee.realforeclose.com' },
  { name: 'Polk County FL Foreclosure', state: 'FL', county: 'Polk', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'polk', baseUrl: 'https://polk.realforeclose.com' }, sourceUrl: 'https://polk.realforeclose.com' },
  { name: 'Volusia County FL Foreclosure', state: 'FL', county: 'Volusia', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'volusia', baseUrl: 'https://volusia.realforeclose.com' }, sourceUrl: 'https://volusia.realforeclose.com' },
  { name: 'Brevard County FL Foreclosure', state: 'FL', county: 'Brevard', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'brevard', baseUrl: 'https://brevard.realforeclose.com' }, sourceUrl: 'https://brevard.realforeclose.com' },
  { name: 'Sarasota County FL Foreclosure', state: 'FL', county: 'Sarasota', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'sarasota', baseUrl: 'https://sarasota.realforeclose.com' }, sourceUrl: 'https://sarasota.realforeclose.com' },
  { name: 'Manatee County FL Foreclosure', state: 'FL', county: 'Manatee', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'manatee', baseUrl: 'https://manatee.realforeclose.com' }, sourceUrl: 'https://manatee.realforeclose.com' },
  { name: 'Collier County FL Foreclosure', state: 'FL', county: 'Collier', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'collier', baseUrl: 'https://collier.realforeclose.com' }, sourceUrl: 'https://collier.realforeclose.com' },
  { name: 'Pasco County FL Foreclosure', state: 'FL', county: 'Pasco', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'pasco', baseUrl: 'https://pasco.realforeclose.com' }, sourceUrl: 'https://pasco.realforeclose.com' },
  { name: 'Seminole County FL Foreclosure', state: 'FL', county: 'Seminole', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'seminole', baseUrl: 'https://seminole.realforeclose.com' }, sourceUrl: 'https://seminole.realforeclose.com' },
  { name: 'Marion County FL Foreclosure', state: 'FL', county: 'Marion', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'marion', baseUrl: 'https://marion.realforeclose.com' }, sourceUrl: 'https://marion.realforeclose.com' },
  { name: 'Lake County FL Foreclosure', state: 'FL', county: 'Lake', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'lake', baseUrl: 'https://lake.realforeclose.com' }, sourceUrl: 'https://lake.realforeclose.com' },
  { name: 'Osceola County FL Foreclosure', state: 'FL', county: 'Osceola', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'osceola', baseUrl: 'https://osceola.realforeclose.com' }, sourceUrl: 'https://osceola.realforeclose.com' },
  { name: 'Escambia County FL Foreclosure', state: 'FL', county: 'Escambia', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'escambia', baseUrl: 'https://escambia.realforeclose.com' }, sourceUrl: 'https://escambia.realforeclose.com' },
  { name: 'Duval County FL Foreclosure', state: 'FL', county: 'Duval', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'duval', baseUrl: 'https://duval.realforeclose.com' }, sourceUrl: 'https://duval.realforeclose.com' },
  { name: 'Leon County FL Foreclosure', state: 'FL', county: 'Leon', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'leon', baseUrl: 'https://leon.realforeclose.com' }, sourceUrl: 'https://leon.realforeclose.com' },

  // ─── TEXAS ─────────────────────────────────────────────────────────────────
  { name: 'Harris County TX Tax Deed', state: 'TX', county: 'Harris', listingType: 'tax-deed', platform: 'custom', sourceUrl: 'https://www.hcto.net/property-tax/tax-sales', config: { selectors: { row: 'table tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)', date: 'td:nth-child(4)', parcelId: 'td:nth-child(1)' } } },
  { name: 'Dallas County TX Tax Deed', state: 'TX', county: 'Dallas', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://www.dallascounty.org/departments/taxoffice/taxsales.php', config: { selectors: { row: 'table tr', address: 'td:nth-child(2)', amount: 'td:nth-child(4)' } } },
  { name: 'Tarrant County TX Tax Deed', state: 'TX', county: 'Tarrant', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://access.tarrantcounty.com/content/main/en/tax/TaxSales.html', config: { selectors: { row: 'tr.datarow', address: 'td:nth-child(3)', amount: 'td:nth-child(5)' } } },
  { name: 'Bexar County TX Tax Deed', state: 'TX', county: 'Bexar', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://www.bexar.org/771/Tax-Sales', config: { selectors: { row: 'table tr', address: 'td:nth-child(2)', amount: 'td:nth-child(4)' } } },
  { name: 'Travis County TX Tax Deed', state: 'TX', county: 'Travis', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://www.traviscad.org/property-search/tax-sales/', config: { selectors: { row: 'tr.data', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },

  // ─── OHIO (RealAuction) ─────────────────────────────────────────────────────
  { name: 'Cuyahoga County OH Foreclosure', state: 'OH', county: 'Cuyahoga', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'cuyahoga', baseUrl: 'https://cuyahoga.sheriffsalesonline.com' }, sourceUrl: 'https://cuyahoga.sheriffsalesonline.com' },
  { name: 'Franklin County OH Foreclosure', state: 'OH', county: 'Franklin', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'franklin', baseUrl: 'https://franklin.sheriffsalesonline.com' }, sourceUrl: 'https://franklin.sheriffsalesonline.com' },
  { name: 'Hamilton County OH Foreclosure', state: 'OH', county: 'Hamilton', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'hamilton', baseUrl: 'https://hamilton.sheriffsalesonline.com' }, sourceUrl: 'https://hamilton.sheriffsalesonline.com' },
  { name: 'Summit County OH Foreclosure', state: 'OH', county: 'Summit', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'summit', baseUrl: 'https://summit.sheriffsalesonline.com' }, sourceUrl: 'https://summit.sheriffsalesonline.com' },
  { name: 'Montgomery County OH Foreclosure', state: 'OH', county: 'Montgomery', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'montgomery', baseUrl: 'https://montgomery.sheriffsalesonline.com' }, sourceUrl: 'https://montgomery.sheriffsalesonline.com' },
  { name: 'Lucas County OH Foreclosure', state: 'OH', county: 'Lucas', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'lucas', baseUrl: 'https://lucas.sheriffsalesonline.com' }, sourceUrl: 'https://lucas.sheriffsalesonline.com' },
  { name: 'Stark County OH Foreclosure', state: 'OH', county: 'Stark', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'stark', baseUrl: 'https://stark.sheriffsalesonline.com' }, sourceUrl: 'https://stark.sheriffsalesonline.com' },
  { name: 'Butler County OH Foreclosure', state: 'OH', county: 'Butler', listingType: 'foreclosure', platform: 'realauction', config: { countyCode: 'butler', baseUrl: 'https://butler.sheriffsalesonline.com' }, sourceUrl: 'https://butler.sheriffsalesonline.com' },

  // ─── NEW JERSEY ─────────────────────────────────────────────────────────────
  { name: 'Essex County NJ Tax Lien', state: 'NJ', county: 'Essex', listingType: 'tax-lien', platform: 'realauction', config: { countyCode: 'essex', baseUrl: 'https://essex.njsheriff.com' }, sourceUrl: 'https://essex.njsheriff.com' },
  { name: 'Bergen County NJ Tax Lien', state: 'NJ', county: 'Bergen', listingType: 'tax-lien', platform: 'realauction', config: { countyCode: 'bergen', baseUrl: 'https://bergen.njsheriff.com' }, sourceUrl: 'https://bergen.njsheriff.com' },
  { name: 'Hudson County NJ Tax Lien', state: 'NJ', county: 'Hudson', listingType: 'tax-lien', platform: 'realauction', config: { countyCode: 'hudson', baseUrl: 'https://hudson.njsheriff.com' }, sourceUrl: 'https://hudson.njsheriff.com' },
  { name: 'Middlesex County NJ Tax Lien', state: 'NJ', county: 'Middlesex', listingType: 'tax-lien', platform: 'realauction', config: { countyCode: 'middlesex', baseUrl: 'https://middlesex.njsheriff.com' }, sourceUrl: 'https://middlesex.njsheriff.com' },
  { name: 'Monmouth County NJ Tax Lien', state: 'NJ', county: 'Monmouth', listingType: 'tax-lien', platform: 'realauction', config: { countyCode: 'monmouth', baseUrl: 'https://monmouth.njsheriff.com' }, sourceUrl: 'https://monmouth.njsheriff.com' },
  { name: 'Ocean County NJ Tax Lien', state: 'NJ', county: 'Ocean', listingType: 'tax-lien', platform: 'realauction', config: { countyCode: 'ocean', baseUrl: 'https://ocean.njsheriff.com' }, sourceUrl: 'https://ocean.njsheriff.com' },
  { name: 'Union County NJ Tax Lien', state: 'NJ', county: 'Union', listingType: 'tax-lien', platform: 'realauction', config: { countyCode: 'union', baseUrl: 'https://union.njsheriff.com' }, sourceUrl: 'https://union.njsheriff.com' },

  // ─── ILLINOIS ───────────────────────────────────────────────────────────────
  { name: 'Cook County IL Foreclosure', state: 'IL', county: 'Cook', listingType: 'foreclosure', platform: 'custom', sourceUrl: 'https://www.cookcountysheriff.org/departments/courts-civil-process/sheriff-sales/', config: {} },
  { name: 'DuPage County IL Tax Deed', state: 'IL', county: 'DuPage', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://www.dupagecounty.gov/elected_officials/treasurer/tax-sales/', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(4)' } } },
  { name: 'Will County IL Tax Deed', state: 'IL', county: 'Will', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://www.willcountytreasurer.com/tax_sales/', config: { selectors: { row: 'tr', address: 'td:nth-child(3)', amount: 'td:nth-child(5)' } } },
  { name: 'Lake County IL Tax Deed', state: 'IL', county: 'Lake', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://www.lakecountyil.gov/treasurer/taxsales', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(4)' } } },

  // ─── CALIFORNIA (Bid4Assets for most counties) ──────────────────────────────
  { name: 'Los Angeles County CA Tax Deed', state: 'CA', county: 'Los Angeles', listingType: 'tax-deed', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/lacofd', config: { agencySlug: 'lacofd' } },
  { name: 'San Bernardino County CA Tax Deed', state: 'CA', county: 'San Bernardino', listingType: 'tax-deed', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/sanbernardino', config: { agencySlug: 'sanbernardino' } },
  { name: 'Riverside County CA Tax Deed', state: 'CA', county: 'Riverside', listingType: 'tax-deed', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/riverside', config: { agencySlug: 'riverside' } },
  { name: 'Sacramento County CA Tax Deed', state: 'CA', county: 'Sacramento', listingType: 'tax-deed', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/sacramento', config: { agencySlug: 'sacramento' } },
  { name: 'Kern County CA Tax Deed', state: 'CA', county: 'Kern', listingType: 'tax-deed', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/kern', config: { agencySlug: 'kern' } },
  { name: 'San Diego County CA Tax Deed', state: 'CA', county: 'San Diego', listingType: 'tax-deed', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/sandiego', config: { agencySlug: 'sandiego' } },
  { name: 'Fresno County CA Tax Deed', state: 'CA', county: 'Fresno', listingType: 'tax-deed', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/fresno', config: { agencySlug: 'fresno' } },
  { name: 'Tulare County CA Tax Deed', state: 'CA', county: 'Tulare', listingType: 'tax-deed', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/tulare', config: { agencySlug: 'tulare' } },

  // ─── GEORGIA (SRI Services) ──────────────────────────────────────────────────
  { name: 'Fulton County GA Tax Deed', state: 'GA', county: 'Fulton', listingType: 'tax-deed', platform: 'sri', sourceUrl: 'https://www.sriservices.com/taxsale/', config: { fipsCode: '13121' } },
  { name: 'Gwinnett County GA Tax Deed', state: 'GA', county: 'Gwinnett', listingType: 'tax-deed', platform: 'sri', sourceUrl: 'https://www.sriservices.com/taxsale/', config: { fipsCode: '13135' } },
  { name: 'DeKalb County GA Tax Deed', state: 'GA', county: 'DeKalb', listingType: 'tax-deed', platform: 'sri', sourceUrl: 'https://www.sriservices.com/taxsale/', config: { fipsCode: '13089' } },
  { name: 'Cobb County GA Tax Deed', state: 'GA', county: 'Cobb', listingType: 'tax-deed', platform: 'sri', sourceUrl: 'https://www.sriservices.com/taxsale/', config: { fipsCode: '13067' } },
  { name: 'Clayton County GA Tax Deed', state: 'GA', county: 'Clayton', listingType: 'tax-deed', platform: 'sri', sourceUrl: 'https://www.sriservices.com/taxsale/', config: { fipsCode: '13063' } },

  // ─── COLORADO (GovEase) ──────────────────────────────────────────────────────
  { name: 'Denver County CO Tax Lien', state: 'CO', county: 'Denver', listingType: 'tax-lien', platform: 'govease', sourceUrl: 'https://legacy.govease.com/co/denver-county', config: { countyId: 'co-denver' } },
  { name: 'El Paso County CO Tax Lien', state: 'CO', county: 'El Paso', listingType: 'tax-lien', platform: 'govease', sourceUrl: 'https://legacy.govease.com/co/el-paso-county', config: { countyId: 'co-elpaso' } },
  { name: 'Jefferson County CO Tax Lien', state: 'CO', county: 'Jefferson', listingType: 'tax-lien', platform: 'govease', sourceUrl: 'https://legacy.govease.com/co/jefferson-county', config: { countyId: 'co-jefferson' } },
  { name: 'Arapahoe County CO Tax Lien', state: 'CO', county: 'Arapahoe', listingType: 'tax-lien', platform: 'govease', sourceUrl: 'https://legacy.govease.com/co/arapahoe-county', config: { countyId: 'co-arapahoe' } },
  { name: 'Adams County CO Tax Lien', state: 'CO', county: 'Adams', listingType: 'tax-lien', platform: 'govease', sourceUrl: 'https://legacy.govease.com/co/adams-county', config: { countyId: 'co-adams' } },
  { name: 'Boulder County CO Tax Lien', state: 'CO', county: 'Boulder', listingType: 'tax-lien', platform: 'govease', sourceUrl: 'https://legacy.govease.com/co/boulder-county', config: { countyId: 'co-boulder' } },
  { name: 'Larimer County CO Tax Lien', state: 'CO', county: 'Larimer', listingType: 'tax-lien', platform: 'govease', sourceUrl: 'https://legacy.govease.com/co/larimer-county', config: { countyId: 'co-larimer' } },

  // ─── ARIZONA ─────────────────────────────────────────────────────────────────
  { name: 'Maricopa County AZ Tax Lien', state: 'AZ', county: 'Maricopa', listingType: 'tax-lien', platform: 'govease', sourceUrl: 'https://legacy.govease.com/az/maricopa-county', config: { countyId: 'az-maricopa' } },
  { name: 'Pima County AZ Tax Lien', state: 'AZ', county: 'Pima', listingType: 'tax-lien', platform: 'govease', sourceUrl: 'https://legacy.govease.com/az/pima-county', config: { countyId: 'az-pima' } },
  { name: 'Pinal County AZ Tax Lien', state: 'AZ', county: 'Pinal', listingType: 'tax-lien', platform: 'govease', sourceUrl: 'https://legacy.govease.com/az/pinal-county', config: { countyId: 'az-pinal' } },
  { name: 'Yavapai County AZ Tax Lien', state: 'AZ', county: 'Yavapai', listingType: 'tax-lien', platform: 'govease', sourceUrl: 'https://legacy.govease.com/az/yavapai-county', config: { countyId: 'az-yavapai' } },
  { name: 'Mohave County AZ Tax Lien', state: 'AZ', county: 'Mohave', listingType: 'tax-lien', platform: 'govease', sourceUrl: 'https://legacy.govease.com/az/mohave-county', config: { countyId: 'az-mohave' } },

  // ─── INDIANA ─────────────────────────────────────────────────────────────────
  { name: 'Marion County IN Tax Lien', state: 'IN', county: 'Marion', listingType: 'tax-lien', platform: 'generic-html', sourceUrl: 'https://www.indy.gov/activity/tax-sale', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(4)' } } },
  { name: 'Lake County IN Tax Lien', state: 'IN', county: 'Lake', listingType: 'tax-lien', platform: 'generic-html', sourceUrl: 'https://www.lakecountyin.org/tax-sale', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },
  { name: 'Allen County IN Tax Lien', state: 'IN', county: 'Allen', listingType: 'tax-lien', platform: 'generic-html', sourceUrl: 'https://www.allencounty.us/index.aspx?page=tax-sale', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(4)' } } },
  { name: 'St. Joseph County IN Tax Lien', state: 'IN', county: 'St. Joseph', listingType: 'tax-lien', platform: 'generic-html', sourceUrl: 'https://www.stjosephcountyindiana.com/tax-sale', config: { selectors: { row: 'tr', address: 'td:nth-child(3)', amount: 'td:nth-child(4)' } } },

  // ─── MICHIGAN ────────────────────────────────────────────────────────────────
  { name: 'Wayne County MI Tax Deed', state: 'MI', county: 'Wayne', listingType: 'tax-deed', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/wayne-mi', config: { agencySlug: 'wayne-mi' } },
  { name: 'Oakland County MI Tax Deed', state: 'MI', county: 'Oakland', listingType: 'tax-deed', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/oakland-mi', config: { agencySlug: 'oakland-mi' } },
  { name: 'Macomb County MI Tax Deed', state: 'MI', county: 'Macomb', listingType: 'tax-deed', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/macomb-mi', config: { agencySlug: 'macomb-mi' } },
  { name: 'Kent County MI Tax Deed', state: 'MI', county: 'Kent', listingType: 'tax-deed', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/kent-mi', config: { agencySlug: 'kent-mi' } },

  // ─── PENNSYLVANIA ────────────────────────────────────────────────────────────
  { name: 'Philadelphia County PA Foreclosure', state: 'PA', county: 'Philadelphia', listingType: 'foreclosure', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/philadelphia', config: { agencySlug: 'philadelphia' } },
  { name: 'Allegheny County PA Foreclosure', state: 'PA', county: 'Allegheny', listingType: 'foreclosure', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/allegheny', config: { agencySlug: 'allegheny' } },
  { name: 'Montgomery County PA Foreclosure', state: 'PA', county: 'Montgomery', listingType: 'foreclosure', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/montgomery-pa', config: { agencySlug: 'montgomery-pa' } },
  { name: 'Chester County PA Foreclosure', state: 'PA', county: 'Chester', listingType: 'foreclosure', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/chester-pa', config: { agencySlug: 'chester-pa' } },

  // ─── NORTH CAROLINA ──────────────────────────────────────────────────────────
  { name: 'Mecklenburg County NC Tax Deed', state: 'NC', county: 'Mecklenburg', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://www.mecknc.gov/TaxCollections/Pages/TaxForeclosures.aspx', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(4)' } } },
  { name: 'Wake County NC Tax Deed', state: 'NC', county: 'Wake', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://www.wake.gov/departments-agencies/tax-administration/tax-foreclosures', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },
  { name: 'Guilford County NC Tax Deed', state: 'NC', county: 'Guilford', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://www.guilfordcountync.gov/our-county/tax-department/tax-foreclosures', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(4)' } } },
  { name: 'Forsyth County NC Tax Deed', state: 'NC', county: 'Forsyth', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://www.forsyth.cc/Tax/TaxForeclosures.aspx', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(4)' } } },

  // ─── SOUTH CAROLINA ──────────────────────────────────────────────────────────
  { name: 'Greenville County SC Tax Lien', state: 'SC', county: 'Greenville', listingType: 'tax-lien', platform: 'sri', sourceUrl: 'https://www.sriservices.com/taxsale/', config: { fipsCode: '45045' } },
  { name: 'Richland County SC Tax Lien', state: 'SC', county: 'Richland', listingType: 'tax-lien', platform: 'sri', sourceUrl: 'https://www.sriservices.com/taxsale/', config: { fipsCode: '45079' } },
  { name: 'Charleston County SC Tax Lien', state: 'SC', county: 'Charleston', listingType: 'tax-lien', platform: 'sri', sourceUrl: 'https://www.sriservices.com/taxsale/', config: { fipsCode: '45019' } },
  { name: 'Horry County SC Tax Lien', state: 'SC', county: 'Horry', listingType: 'tax-lien', platform: 'sri', sourceUrl: 'https://www.sriservices.com/taxsale/', config: { fipsCode: '45051' } },

  // ─── VIRGINIA ────────────────────────────────────────────────────────────────
  { name: 'Fairfax County VA Tax Deed', state: 'VA', county: 'Fairfax', listingType: 'tax-deed', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/fairfax', config: { agencySlug: 'fairfax' } },
  { name: 'Prince William County VA Tax Deed', state: 'VA', county: 'Prince William', listingType: 'tax-deed', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/princewilliam', config: { agencySlug: 'princewilliam' } },
  { name: 'Chesterfield County VA Tax Deed', state: 'VA', county: 'Chesterfield', listingType: 'tax-deed', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/chesterfield-va', config: { agencySlug: 'chesterfield-va' } },

  // ─── MARYLAND ────────────────────────────────────────────────────────────────
  { name: 'Baltimore City MD Tax Lien', state: 'MD', county: 'Baltimore City', listingType: 'tax-lien', platform: 'generic-html', sourceUrl: 'https://sdat.dat.maryland.gov/RealProperty/Pages/taxsale.aspx', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },
  { name: "Prince George's County MD Tax Lien", state: 'MD', county: "Prince George's", listingType: 'tax-lien', platform: 'generic-html', sourceUrl: 'https://www.princegeorgescountymd.gov/1779/Tax-Sale', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(4)' } } },
  { name: 'Montgomery County MD Tax Lien', state: 'MD', county: 'Montgomery', listingType: 'tax-lien', platform: 'generic-html', sourceUrl: 'https://www.montgomerycountymd.gov/treasury/taxsale/', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },

  // ─── NEW YORK ────────────────────────────────────────────────────────────────
  { name: 'Queens County NY Tax Lien', state: 'NY', county: 'Queens', listingType: 'tax-lien', platform: 'generic-html', sourceUrl: 'https://www1.nyc.gov/site/finance/taxes/property-lien-sales.page', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },
  { name: 'Suffolk County NY Foreclosure', state: 'NY', county: 'Suffolk', listingType: 'foreclosure', platform: 'generic-html', sourceUrl: 'https://www.suffolkcountyny.gov/Departments/County-Treasurer/Tax-Foreclosure', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(4)' } } },
  { name: 'Nassau County NY Foreclosure', state: 'NY', county: 'Nassau', listingType: 'foreclosure', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/nassau', config: { agencySlug: 'nassau' } },
  { name: 'Erie County NY Tax Deed', state: 'NY', county: 'Erie', listingType: 'tax-deed', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/erie-ny', config: { agencySlug: 'erie-ny' } },
  { name: 'Monroe County NY Tax Deed', state: 'NY', county: 'Monroe', listingType: 'tax-deed', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/monroe-ny', config: { agencySlug: 'monroe-ny' } },

  // ─── NEVADA ──────────────────────────────────────────────────────────────────
  { name: 'Clark County NV Tax Deed', state: 'NV', county: 'Clark', listingType: 'tax-deed', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/clark-nv', config: { agencySlug: 'clark-nv' } },
  { name: 'Washoe County NV Tax Deed', state: 'NV', county: 'Washoe', listingType: 'tax-deed', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/washoe', config: { agencySlug: 'washoe' } },

  // ─── WASHINGTON ──────────────────────────────────────────────────────────────
  { name: 'King County WA Tax Deed', state: 'WA', county: 'King', listingType: 'tax-deed', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/king-wa', config: { agencySlug: 'king-wa' } },
  { name: 'Pierce County WA Tax Deed', state: 'WA', county: 'Pierce', listingType: 'tax-deed', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/pierce-wa', config: { agencySlug: 'pierce-wa' } },
  { name: 'Snohomish County WA Tax Deed', state: 'WA', county: 'Snohomish', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://www.snohomishcountywa.gov/1035/Tax-Foreclosure', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },

  // ─── OREGON ──────────────────────────────────────────────────────────────────
  { name: 'Multnomah County OR Tax Deed', state: 'OR', county: 'Multnomah', listingType: 'tax-deed', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/multnomah', config: { agencySlug: 'multnomah' } },
  { name: 'Washington County OR Tax Deed', state: 'OR', county: 'Washington', listingType: 'tax-deed', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/washington-or', config: { agencySlug: 'washington-or' } },
  { name: 'Clackamas County OR Tax Deed', state: 'OR', county: 'Clackamas', listingType: 'tax-deed', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/clackamas', config: { agencySlug: 'clackamas' } },

  // ─── TENNESSEE ───────────────────────────────────────────────────────────────
  { name: 'Shelby County TN Tax Deed', state: 'TN', county: 'Shelby', listingType: 'tax-deed', platform: 'sri', sourceUrl: 'https://www.sriservices.com/taxsale/', config: { fipsCode: '47157' } },
  { name: 'Davidson County TN Tax Deed', state: 'TN', county: 'Davidson', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://www.nashville.gov/metro/finance/tax-delinquent-properties', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },
  { name: 'Knox County TN Tax Deed', state: 'TN', county: 'Knox', listingType: 'tax-deed', platform: 'sri', sourceUrl: 'https://www.sriservices.com/taxsale/', config: { fipsCode: '47093' } },

  // ─── ALABAMA ──────────────────────────────────────────────────────────────────
  { name: 'Jefferson County AL Tax Lien', state: 'AL', county: 'Jefferson', listingType: 'tax-lien', platform: 'generic-html', sourceUrl: 'https://www.jeffcoedu.com/taxsale', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(4)' } } },
  { name: 'Mobile County AL Tax Lien', state: 'AL', county: 'Mobile', listingType: 'tax-lien', platform: 'generic-html', sourceUrl: 'https://www.mobilecountyal.gov/government/revenue/tax-sale/', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },
  { name: 'Madison County AL Tax Lien', state: 'AL', county: 'Madison', listingType: 'tax-lien', platform: 'generic-html', sourceUrl: 'https://www.madisoncountyal.gov/departments/revenue/tax-sale', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },

  // ─── LOUISIANA ───────────────────────────────────────────────────────────────
  { name: 'Orleans Parish LA Tax Deed', state: 'LA', county: 'Orleans', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://www.nolaassessor.com/tax-sale', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },
  { name: 'Jefferson Parish LA Tax Deed', state: 'LA', county: 'Jefferson', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://www.jeffparish.net/departments/finance/property-tax/tax-sale', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(4)' } } },
  { name: 'East Baton Rouge Parish LA Tax Deed', state: 'LA', county: 'East Baton Rouge', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://www.brla.gov/533/Tax-Sales', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },

  // ─── MISSOURI ────────────────────────────────────────────────────────────────
  { name: 'St. Louis County MO Tax Deed', state: 'MO', county: 'St. Louis', listingType: 'tax-deed', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/stlouis', config: { agencySlug: 'stlouis' } },
  { name: 'Jackson County MO Tax Deed', state: 'MO', county: 'Jackson', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://www.jacksongov.org/government/elected-offices/collector-of-revenue/tax-sale', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(4)' } } },

  // ─── MINNESOTA ───────────────────────────────────────────────────────────────
  { name: 'Hennepin County MN Tax Deed', state: 'MN', county: 'Hennepin', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://www.hennepin.us/residents/property/property-tax-forfeiture', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },
  { name: 'Ramsey County MN Tax Deed', state: 'MN', county: 'Ramsey', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://www.ramseycounty.us/residents/property/tax-forfeited-land', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(4)' } } },
  { name: 'Dakota County MN Tax Deed', state: 'MN', county: 'Dakota', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://www.dakotacounty.us/residents/property-housing/tax-forfeited-properties', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(4)' } } },

  // ─── IOWA ─────────────────────────────────────────────────────────────────────
  { name: 'Polk County IA Tax Lien', state: 'IA', county: 'Polk', listingType: 'tax-lien', platform: 'govease', sourceUrl: 'https://legacy.govease.com/ia/polk-county', config: { countyId: 'ia-polk' } },
  { name: 'Linn County IA Tax Lien', state: 'IA', county: 'Linn', listingType: 'tax-lien', platform: 'govease', sourceUrl: 'https://legacy.govease.com/ia/linn-county', config: { countyId: 'ia-linn' } },
  { name: 'Scott County IA Tax Lien', state: 'IA', county: 'Scott', listingType: 'tax-lien', platform: 'govease', sourceUrl: 'https://legacy.govease.com/ia/scott-county', config: { countyId: 'ia-scott' } },

  // ─── NEBRASKA ────────────────────────────────────────────────────────────────
  { name: 'Douglas County NE Tax Lien', state: 'NE', county: 'Douglas', listingType: 'tax-lien', platform: 'govease', sourceUrl: 'https://legacy.govease.com/ne/douglas-county', config: { countyId: 'ne-douglas' } },
  { name: 'Lancaster County NE Tax Lien', state: 'NE', county: 'Lancaster', listingType: 'tax-lien', platform: 'govease', sourceUrl: 'https://legacy.govease.com/ne/lancaster-county', config: { countyId: 'ne-lancaster' } },

  // ─── KANSAS ──────────────────────────────────────────────────────────────────
  { name: 'Johnson County KS Tax Deed', state: 'KS', county: 'Johnson', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://www.jocoks.com/delinquent-taxes', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },
  { name: 'Sedgwick County KS Tax Deed', state: 'KS', county: 'Sedgwick', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://www.sedgwickcounty.org/treasurer/tax-sale/', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(4)' } } },

  // ─── UTAH ─────────────────────────────────────────────────────────────────────
  { name: 'Salt Lake County UT Tax Lien', state: 'UT', county: 'Salt Lake', listingType: 'tax-lien', platform: 'govease', sourceUrl: 'https://legacy.govease.com/ut/salt-lake-county', config: { countyId: 'ut-saltlake' } },
  { name: 'Utah County UT Tax Lien', state: 'UT', county: 'Utah', listingType: 'tax-lien', platform: 'govease', sourceUrl: 'https://legacy.govease.com/ut/utah-county', config: { countyId: 'ut-utah' } },
  { name: 'Davis County UT Tax Lien', state: 'UT', county: 'Davis', listingType: 'tax-lien', platform: 'govease', sourceUrl: 'https://legacy.govease.com/ut/davis-county', config: { countyId: 'ut-davis' } },
  { name: 'Weber County UT Tax Lien', state: 'UT', county: 'Weber', listingType: 'tax-lien', platform: 'govease', sourceUrl: 'https://legacy.govease.com/ut/weber-county', config: { countyId: 'ut-weber' } },

  // ─── WYOMING ──────────────────────────────────────────────────────────────────
  { name: 'Laramie County WY Tax Lien', state: 'WY', county: 'Laramie', listingType: 'tax-lien', platform: 'govease', sourceUrl: 'https://legacy.govease.com/wy/laramie-county', config: { countyId: 'wy-laramie' } },
  { name: 'Natrona County WY Tax Lien', state: 'WY', county: 'Natrona', listingType: 'tax-lien', platform: 'govease', sourceUrl: 'https://legacy.govease.com/wy/natrona-county', config: { countyId: 'wy-natrona' } },

  // ─── NEW MEXICO ───────────────────────────────────────────────────────────────
  { name: 'Bernalillo County NM Tax Lien', state: 'NM', county: 'Bernalillo', listingType: 'tax-lien', platform: 'govease', sourceUrl: 'https://legacy.govease.com/nm/bernalillo-county', config: { countyId: 'nm-bernalillo' } },
  { name: 'Dona Ana County NM Tax Lien', state: 'NM', county: 'Dona Ana', listingType: 'tax-lien', platform: 'govease', sourceUrl: 'https://legacy.govease.com/nm/dona-ana-county', config: { countyId: 'nm-donaana' } },
  { name: 'Santa Fe County NM Tax Lien', state: 'NM', county: 'Santa Fe', listingType: 'tax-lien', platform: 'govease', sourceUrl: 'https://legacy.govease.com/nm/santa-fe-county', config: { countyId: 'nm-santafe' } },

  // ─── KENTUCKY ────────────────────────────────────────────────────────────────
  { name: 'Jefferson County KY Tax Lien', state: 'KY', county: 'Jefferson', listingType: 'tax-lien', platform: 'generic-html', sourceUrl: 'https://www.jeffersoncc.com/tax-sales', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },
  { name: 'Fayette County KY Tax Lien', state: 'KY', county: 'Fayette', listingType: 'tax-lien', platform: 'generic-html', sourceUrl: 'https://www.lexingtonky.gov/tax-bills-due', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(4)' } } },

  // ─── WEST VIRGINIA ───────────────────────────────────────────────────────────
  { name: 'Kanawha County WV Tax Lien', state: 'WV', county: 'Kanawha', listingType: 'tax-lien', platform: 'generic-html', sourceUrl: 'https://www.kanawha.us/tax-sales', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },
  { name: 'Cabell County WV Tax Lien', state: 'WV', county: 'Cabell', listingType: 'tax-lien', platform: 'generic-html', sourceUrl: 'https://www.cabell.us/tax-sales', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },

  // ─── MISSISSIPPI ──────────────────────────────────────────────────────────────
  { name: 'Hinds County MS Tax Lien', state: 'MS', county: 'Hinds', listingType: 'tax-lien', platform: 'generic-html', sourceUrl: 'https://www.hindscountyms.gov/tax-collector/tax-sale', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },
  { name: 'Harrison County MS Tax Lien', state: 'MS', county: 'Harrison', listingType: 'tax-lien', platform: 'generic-html', sourceUrl: 'https://www.harrisoncountyms.gov/tax-sale', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(4)' } } },

  // ─── ARKANSAS ────────────────────────────────────────────────────────────────
  { name: 'Pulaski County AR Tax Deed', state: 'AR', county: 'Pulaski', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://www.pulaskicountyar.net/tax-collector/land-commissioner', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(4)' } } },
  { name: 'Benton County AR Tax Deed', state: 'AR', county: 'Benton', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://www.bentoncountyar.gov/delinquent-taxes', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },

  // ─── IDAHO ────────────────────────────────────────────────────────────────────
  { name: 'Ada County ID Tax Deed', state: 'ID', county: 'Ada', listingType: 'tax-deed', platform: 'govease', sourceUrl: 'https://legacy.govease.com/id/ada-county', config: { countyId: 'id-ada' } },
  { name: 'Canyon County ID Tax Deed', state: 'ID', county: 'Canyon', listingType: 'tax-deed', platform: 'govease', sourceUrl: 'https://legacy.govease.com/id/canyon-county', config: { countyId: 'id-canyon' } },

  // ─── MONTANA ──────────────────────────────────────────────────────────────────
  { name: 'Yellowstone County MT Tax Lien', state: 'MT', county: 'Yellowstone', listingType: 'tax-lien', platform: 'generic-html', sourceUrl: 'https://www.yellowstonecountymt.gov/214/Treasurer', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },
  { name: 'Cascade County MT Tax Lien', state: 'MT', county: 'Cascade', listingType: 'tax-lien', platform: 'generic-html', sourceUrl: 'https://www.cascadecountymt.gov/treasurer', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },

  // ─── NORTH DAKOTA ────────────────────────────────────────────────────────────
  { name: 'Cass County ND Tax Deed', state: 'ND', county: 'Cass', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://www.casscountynd.gov/county/depts/auditor/taxsale', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },

  // ─── SOUTH DAKOTA ────────────────────────────────────────────────────────────
  { name: 'Minnehaha County SD Tax Deed', state: 'SD', county: 'Minnehaha', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://www.minnehahacounty.org/dept/aud/taxsale.php', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },
  { name: 'Pennington County SD Tax Deed', state: 'SD', county: 'Pennington', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://penningtoncounty.com/offices/treasurer/tax-sales', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },

  // ─── CONNECTICUT ─────────────────────────────────────────────────────────────
  { name: 'Hartford CT Tax Lien', state: 'CT', county: 'Hartford', listingType: 'tax-lien', platform: 'generic-html', sourceUrl: 'https://www.hartford.gov/government/departments/assessments/property-assessment-lien-sale', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },
  { name: 'New Haven CT Tax Lien', state: 'CT', county: 'New Haven', listingType: 'tax-lien', platform: 'generic-html', sourceUrl: 'https://www.newhavenct.gov/government/departments/tax-collector/tax-sales', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },

  // ─── MASSACHUSETTS ───────────────────────────────────────────────────────────
  { name: 'Suffolk County MA Tax Lien', state: 'MA', county: 'Suffolk', listingType: 'tax-lien', platform: 'generic-html', sourceUrl: 'https://www.cityofboston.gov/treasury/taxliens/', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },
  { name: 'Worcester County MA Tax Lien', state: 'MA', county: 'Worcester', listingType: 'tax-lien', platform: 'generic-html', sourceUrl: 'https://www.worcesterma.gov/finance/tax-title', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(4)' } } },

  // ─── HAWAII ───────────────────────────────────────────────────────────────────
  { name: 'Honolulu County HI Tax Deed', state: 'HI', county: 'Honolulu', listingType: 'tax-deed', platform: 'bid4assets', sourceUrl: 'https://www.bid4assets.com/honolulu', config: { agencySlug: 'honolulu' } },
  { name: 'Maui County HI Tax Deed', state: 'HI', county: 'Maui', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://www.mauicounty.gov/1070/Delinquent-Taxes', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },

  // ─── ALASKA ───────────────────────────────────────────────────────────────────
  { name: 'Anchorage Borough AK Tax Deed', state: 'AK', county: 'Anchorage', listingType: 'tax-deed', platform: 'generic-html', sourceUrl: 'https://www.muni.org/Departments/finance/Pages/Foreclosure.aspx', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },

  // ─── DC ───────────────────────────────────────────────────────────────────────
  { name: 'Washington DC Tax Lien', state: 'DC', county: 'DC', listingType: 'tax-lien', platform: 'generic-html', sourceUrl: 'https://otr.cfo.dc.gov/page/real-property-tax-sale', config: { selectors: { row: 'tr', address: 'td:nth-child(2)', amount: 'td:nth-child(3)' } } },
]

async function main() {
  console.log(`Seeding ${scrapers.length} scrapers...`)
  let created = 0
  for (const s of scrapers) {
    try {
      await db.scraper.upsert({
        where: {
          id: `${s.state.toLowerCase()}-${(s.county || 'statewide').toLowerCase().replace(/[^a-z0-9]/g, '-')}-${s.listingType}`,
        },
        create: {
          id: `${s.state.toLowerCase()}-${(s.county || 'statewide').toLowerCase().replace(/[^a-z0-9]/g, '-')}-${s.listingType}`,
          name: s.name,
          state: s.state,
          county: s.county || null,
          listingType: s.listingType,
          platform: s.platform || 'generic-html',
          sourceUrl: s.sourceUrl || null,
          isActive: true,
          schedule: 'daily',
          totalRecords: 0,
          config: s.config || {},
        },
        update: {
          name: s.name,
          platform: s.platform || 'generic-html',
          sourceUrl: s.sourceUrl || null,
          config: s.config || {},
        },
      })
      created++
    } catch (err) {
      console.error(`Failed to seed ${s.name}:`, err)
    }
  }
  console.log(`\u2713 Seeded ${created}/${scrapers.length} scrapers`)
}

main()
  .catch(console.error)
  .finally(() => db.$disconnect())
