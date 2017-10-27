import https from 'https';

export function callService(options, callback){  
  const req = https.request(options, (res) => {  
    let response = '';
    res.on('data', (d) => {
      response += d;
    });
    res.on('end', () => {
        callback(null, JSON.parse(response));
    });
  });
  
  req.on('error', (e) => {
    callback(e, null);
  });

  req.end();
}