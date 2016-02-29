var azure = require('azure-storage');

var storageAccount = "mycustomblob";
var accountKey = "Nn5Vo7jZ4CW7jKw8wVfT3zZIe50favamvhDqGCYDBxZ76kw6xvb6s2trwangEgPHXOJnp0ESGwfFlbpJawaK4Q==";

var blobSvc = azure.createBlobService(storageAccount, accountKey);
blobSvc.createContainerIfNotExists('testblobcontainerstorage', function(error, result, response){
  if(!error){
    // Container exists and allows
    // anonymous read access to blob
    // content and metadata within this container
    console.log('Container created successfully or already exists');
  }
});

var jsonList = ['_MG_2195', '_MG_2767','_MG_4959','_MG_5798','_MG_5834','_MG_6138'];

console.log(jsonList.length);
for (var index = 0; index < jsonList.length; ++index) {
    upload(jsonList[index]);
};

function upload(currentImage)
{
    var imageName = currentImage+'.jpg';
    console.log('Uploading: ' + imageName);
    blobSvc.createBlockBlobFromLocalFile('testblobcontainerstorage', currentImage, imageName, function(error, result, response){
    if(!error){
        console.log('File' + currentImage +  ' Created Successfully');
    }
    else{
        console.log('Error on file upload: ' + response)
    }
    });
}