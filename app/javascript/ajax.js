class AjaxService {
  constructor() {
    this.options = {
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: { 'Content-Type': 'application/json' },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    };
  }

  async get(path, params) {
    const response = await fetch(path, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      ...this.options,
      body: JSON.stringify(params),
    });

    return response.json();
  }

  async post(path, data) {
    const response = await fetch(path, {
      method: 'POST',
      ...this.options,
      body: JSON.stringify(data),
    });

    return response.json();
  }
}

export default new AjaxService();
