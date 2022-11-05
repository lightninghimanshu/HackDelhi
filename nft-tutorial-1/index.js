const { Revise } = require("revise-sdk");
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA5MTAzY2ZjLWNiMzYtNGQ1Yi1hODYzLWQ3NjM1NTExMDg0YiIsImtleSI6ImZlamVqMG5jIiwiaWF0IjoxNjY3NjY5MDI1fQ.MQGiA902FKM86l00m9cvFMcGSVCB8xLDRiz54TnaZXA"; //this needs to be replaced by the AUTH TOKEn you generate
const revise = new Revise({auth: AUTH_TOKEN});

async function run() {

    const collection = await revise.addCollection({
        name: "hkmkc",
        uri: "hkmkb2",
      });
    
      // Collection Name : Use any name you want for your collection (this gets shown in the marketplace))
      // Collection_URI  : Use a unique name (no spaces or special characters)
      //                   this will generate a unique link for your collection
      //                   for e.g. if you choose "myuniquecollection"
      //                   your baseURI wil be "myuniquecollection.revise.link"
    
      const nft = await revise.addNFT(
        {
          image:
            "https://revise-testing.fra1.digitaloceanspaces.com/sample-collection/1.jpg",
          name: "HarshKiMKB",
          tokenId: "2",
          description: "This is a test description",
        },
        [{ attack: "80" }, { color: "maroon" }, { stamina: "90" }],
        collection.id
      );
    
      console.log(nft);

}
run()