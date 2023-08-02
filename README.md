# Decisions and Assumtions

In this app I'll list universities in the US. I wanted to make a list of universities and then a listing for each university because rather than a crude list of housing units because I thought it showed more sides of the demo.

I'll assume that we have housing units available for the Chicago University.

# Observability

I'll ignore observability for this demo. I'd use OpenTelemetry with Grafana Cloud to help me with this.

# About the backend

## Modeling

I'll use softdelete and the standard timestamps for each table.

I'll not use the name "id" for the entities in the DB. This makes it easier to write and read JOIN queries in the DB.

I'll make use of an external_id attribute for certain entities. This makes the entities reachable externally without giving out internal details. It also allows us to have better control of what is exposed and how.

### Housing Unit
Each housing unit will have only one photo aside the rest of the data. This is to keep it simple.

It seems that Prisma doesn't support geospatial data types. I'll just use lat and lon.

I wanted to make a list of floats in prisma to handle unique geolocations. It seems that it doesn't support it so I'll make use of the external_id for this. For this usecase I think it's good to have the external_id reflect the real location and be unique.

The "address" attribute will be human readable. Like "Breite Straße 42a, 14199 Berlin"

I'll assume that while creating the housing unit we've verified the address and geolocation using eg. Google's API and saved it in the DB so we don't have to look up that info later.

I'll assume that a housing unit is only related to one university.

Since we want to filter housing units by distance from campus, I'd like to use geospatial operations in the DB, but that option's not available so I'll save the distance in the housing unit itself. To calculate the distance I'd use the Haversine formula. For the DB seed I'll use a random number...

I'll use the metric system for this demo.

Prisma supports full-text search as a preview feature, but I'll use a simple constains to search in the descriptions.

## Source Code

I'll separate responsabilities in the backend code: routers, procedures and repositories so I gain a finer control over the data models, isolate logic for reuse and maintenability. The idea is to implement a sort of a domain-driven design.

This domain-driven design also allows me to make versions of the API easily. So I'll go ahead and change the router to make a v1 API.

I'm ignoring paging for this demo. I'll just return everything for the frontend.

# About the frontend

## General

I don't trust UI component libraries (there's always something that doesn't quite work in my opinion). So I'll create my own components for this demo. These components are not complete though. They might lack some functionality (like loading animations).

I'd like to use skeleton components as well, but I don't have much time to keep working on the UI.

I'd like to use mapbox, but I don't have much time for that either. I prefer mapbox over leaflet because mapbox offers better customization options in my experience. Although I mostly used mapbox on android and leaflet on webpages.

I'll assume this is just a simple webpage, not a PWA. Still, I'll make it responsive and touch-friendly.

I'll keep it simple and I'll use a layout component to reuse in each page. The alternative is to use a hash router but that always brings more problems down the path.

I won't be using any icon packs. If I had to, there are several options to go for. I'd try to use the icons as components. Something like FontAwesome's library: https://fontawesome.com/docs/web/use-with/react/add-icons

In a real scenario I would maintain a separate logic for the filters in the listings. Creating a DB table model for them. I'm keeping things simple for this demo so I'll hardcode some options for the bedroom and make inputs for distance to campus and price.