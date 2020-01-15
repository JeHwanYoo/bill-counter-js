const $B = {
  /**
   * See the site below.
   * locale : https://www.science.co.il/language/Locale-codes.php
   * currency : https://www.currency-iso.org/en/home/tables/table-a1.html
   */
  localeOptions: {
    format: true,
    locale: 'en-US',
    currency: 'USD',
  },
  /**
   * Count any number in a certain amount of time
   *
   * @param { string } id id (The value of the element must consist only of numbers.)
   * @param { number } end end number
   * @param { number } duration duration (default 100, milsec)
   */
  countFast(id, end, duration = 100) {
    const htmlElement = document.getElementById(id);
    const start = parseInt(htmlElement.innerText.replace(/\D+/g, ''));
    const direction = end > start;
    const differ = Math.abs(end - start);
    const coefficient = direction ? differ / duration : -differ / duration;
    let nextNumber = start;
    const sid = setInterval(() => {
      nextNumber += coefficient;
      if (direction && nextNumber > end) {
        htmlElement.innerText = format(end.toString());
        clearInterval(sid);
      } else if (!direction && nextNumber < end) {
        htmlElement.innerText = format(end.toString());
        clearInterval(sid);
      } else {
        htmlElement.innerText = format(Math.round(nextNumber).toString());
      }
    }, 1);
  },
  /**
   * Count the numbers by n.
   * Perhaps most similar to the counter.
   *
   * @param { string } id id (The value of the element must consist only of numbers.)
   * @param { number } end end number
   * @param { number } n count unit
   * @param { number } interval interval (default 0.1, milsec)
   */
  countByN(id, end, n, interval = 0.1) {
    const htmlElement = document.getElementById(id);
    const start = parseInt(htmlElement.innerText.replace(/\D+/g, ''));
    const direction = end > start;
    const coefficient = direction ? n : -n;
    let nextNumber = start;
    const sid = setInterval(() => {
      nextNumber += coefficient;
      if (direction && nextNumber > end) {
        htmlElement.innerText = format(end.toString());
        clearInterval(sid);
      } else if (!direction && nextNumber < end) {
        htmlElement.innerText = format(end.toString());
        clearInterval(sid);
      } else {
        htmlElement.innerText = format(nextNumber.toString());
      }
    }, interval);
  },
  /**
   * Count value by n ​​in the object. (=countByN)
   * @param { object } obj { value }
   * @param { number } end end number
   * @param { number } n count unit
   * @param { number } interval interval (default 0.1, milsec)
   */
  countObjectByN(obj, end, n, interval = 0.1) {
    const start = obj.value;
    const direction = end > start;
    const coefficient = direction ? n : -n;
    let nextNumber = start;
    const sid = setInterval(() => {
      nextNumber += coefficient;
      if (direction && nextNumber > end) {
        obj.value = format(end.toString());
        clearInterval(sid);
      } else if (!direction && nextNumber < end) {
        obj.value = format(end.toString());
        clearInterval(sid);
      } else {
        obj.value = format(nextNumber.toString());
      }
    }, interval);
  },
  /**
   * Count value very fast ​​in the object. (=countFast)
   * @param { object } obj { value }
   * @param { number } end end number
   * @param { number } duration duration (default 100, milsec)
   */
  countObjectFast(obj, end, duration = 100) {
    const start = obj.value;
    const direction = end > start;
    const differ = Math.abs(end - start);
    const coefficient = direction ? differ / duration : -differ / duration;
    let nextNumber = start;
    const sid = setInterval(() => {
      nextNumber += coefficient;
      if (direction && nextNumber > end) {
        obj.value = format(end.toString());
        clearInterval(sid);
      } else if (!direction && nextNumber < end) {
        obj.value = format(end.toString());
        clearInterval(sid);
      } else {
        obj.value = format(Math.round(nextNumber).toString());
      }
    }, 1);
  },
  /**
   * Define the behavior of the format function. You can customize it with $B.formatStyler = yourFunction;
   * @param number number to format
   */
  formatStyler: defaultFormatStyler,
  defaultFormatStyler,
};

/**
 *
 * @param {number} number
 */
function defaultFormatStyler(number) {
  return new Intl.NumberFormat($B.localeOptions.locale, {
    style: 'currency',
    currency: $B.localeOptions.currency,
    minimumFractionDigits: 0,
  }).format(parseInt(number));
}

function format(number) {
  if (!$B.localeOptions.format) {
    return number;
  } else {
    return $B.formatStyler(number);
  }
}

export { $B };
