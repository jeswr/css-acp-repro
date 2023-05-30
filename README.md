# Running

```bash
npm install
npm run serve:wac # or npm run serve:acp or npm run serve:acp:memory
```

then in another terminal run `npm t`.

## Results

The following are the results of running `npm t` against the three different server configs. Note that `/ownerName/` is publically readable whilst `/ownerName/profile/` is not.

### WAC [`npm run serve:wac`]

```
<http://www.w3.org/ns/ldp#Resource>; rel="type", <http://localhost:3010/ownerName/profile/card.meta>; rel="describedby", <http://localhost:3010/ownerName/profile/card.acl>; rel="acl", <http://localhost:3010/ownerName/.well-known/solid>; rel="http://www.w3.org/ns/solid/terms#storageDescription"
acr[http://localhost:3010/ownerName/profile/card.acr] 404
acl[http://localhost:3010/ownerName/profile/card.acl] 200
<http://www.w3.org/ns/ldp#Container>; rel="type", <http://www.w3.org/ns/ldp#BasicContainer>; rel="type", <http://www.w3.org/ns/ldp#Resource>; rel="type", <http://localhost:3010/ownerName/profile/.meta>; rel="describedby", <http://localhost:3010/ownerName/profile/.acl>; rel="acl", <http://localhost:3010/ownerName/.well-known/solid>; rel="http://www.w3.org/ns/solid/terms#storageDescription"
acr[http://localhost:3010/ownerName/profile/.acr] 404
acl[http://localhost:3010/ownerName/profile/.acl] 404
<http://www.w3.org/ns/pim/space#Storage>; rel="type", <http://www.w3.org/ns/ldp#Container>; rel="type", <http://www.w3.org/ns/ldp#BasicContainer>; rel="type", <http://www.w3.org/ns/ldp#Resource>; rel="type", <http://localhost:3010/ownerName/.meta>; rel="describedby", <http://localhost:3010/ownerName/.acl>; rel="acl", <http://localhost:3010/ownerName/.well-known/solid>; rel="http://www.w3.org/ns/solid/terms#storageDescription"
acr[http://localhost:3010/ownerName/.acr] 404
acl[http://localhost:3010/ownerName/.acl] 200
```


### ACP [`npm run serve:acp`]

```
<http://www.w3.org/ns/ldp#Resource>; rel="type", <http://localhost:3010/ownerName/profile/card.meta>; rel="describedby", <http://localhost:3010/ownerName/profile/card.acr>; rel="acl", <http://localhost:3010/ownerName/.well-known/solid>; rel="http://www.w3.org/ns/solid/terms#storageDescription"
acr[http://localhost:3010/ownerName/profile/card.acr] 200
acl[http://localhost:3010/ownerName/profile/card.acl] 404
<http://www.w3.org/ns/ldp#Container>; rel="type", <http://www.w3.org/ns/ldp#BasicContainer>; rel="type", <http://www.w3.org/ns/ldp#Resource>; rel="type", <http://localhost:3010/ownerName/profile/.meta>; rel="describedby", <http://localhost:3010/ownerName/profile/.acr>; rel="acl", <http://localhost:3010/ownerName/.well-known/solid>; rel="http://www.w3.org/ns/solid/terms#storageDescription"
acr[http://localhost:3010/ownerName/profile/.acr] 404
acl[http://localhost:3010/ownerName/profile/.acl] 404
<http://www.w3.org/ns/pim/space#Storage>; rel="type", <http://www.w3.org/ns/ldp#Container>; rel="type", <http://www.w3.org/ns/ldp#BasicContainer>; rel="type", <http://www.w3.org/ns/ldp#Resource>; rel="type", <http://localhost:3010/ownerName/.meta>; rel="describedby", <http://localhost:3010/ownerName/.acr>; rel="acl", <http://localhost:3010/ownerName/.well-known/solid>; rel="http://www.w3.org/ns/solid/terms#storageDescription"
acr[http://localhost:3010/ownerName/.acr] 200
acl[http://localhost:3010/ownerName/.acl] 404
```

### ACP (in-memory) [`npm run serve:acp:memory`]

```
<http://www.w3.org/ns/ldp#Resource>; rel="type", <http://localhost:3010/ownerName/profile/card.meta>; rel="describedby", <http://localhost:3010/ownerName/profile/card.acr>; rel="acl", <http://localhost:3010/ownerName/.well-known/solid>; rel="http://www.w3.org/ns/solid/terms#storageDescription"
acr[http://localhost:3010/ownerName/profile/card.acr] 200
acl[http://localhost:3010/ownerName/profile/card.acl] 404
<http://www.w3.org/ns/ldp#Container>; rel="type", <http://www.w3.org/ns/ldp#BasicContainer>; rel="type", <http://www.w3.org/ns/ldp#Resource>; rel="type", <http://localhost:3010/ownerName/profile/.meta>; rel="describedby", <http://localhost:3010/ownerName/profile/.acr>; rel="acl", <http://localhost:3010/ownerName/.well-known/solid>; rel="http://www.w3.org/ns/solid/terms#storageDescription"
acr[http://localhost:3010/ownerName/profile/.acr] 404
acl[http://localhost:3010/ownerName/profile/.acl] 404
<http://www.w3.org/ns/pim/space#Storage>; rel="type", <http://www.w3.org/ns/ldp#Container>; rel="type", <http://www.w3.org/ns/ldp#BasicContainer>; rel="type", <http://www.w3.org/ns/ldp#Resource>; rel="type", <http://localhost:3010/ownerName/.meta>; rel="describedby", <http://localhost:3010/ownerName/.acr>; rel="acl", <http://localhost:3010/ownerName/.well-known/solid>; rel="http://www.w3.org/ns/solid/terms#storageDescription"
acr[http://localhost:3010/ownerName/.acr] 200
acl[http://localhost:3010/ownerName/.acl] 404
```
