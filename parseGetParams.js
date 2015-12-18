function parseGetParams(){
	//Получаем данные о URL
	var href = window.location.href;
	var pathname = window.location.pathname;
	var origin = '';
	if(typeof(window.location.origin) === 'undefined'){
		origin = window.location.protocol+ "//" + window.location.host;
	}
	else{
		origin = window.location.origin;
	}

	//Убираем начало адреса
	var beforeGET = origin+pathname;
	var withoutAddress = href.replace(beforeGET, '');

	//Убираем хэш-данные(они идут в конце урла)
	var withoutHash = withoutAddress.split('#');

	//Обрабатываем GET-строку
	var resArray = withoutHash[0].split('&');
	resArray[0] = resArray[0].replace('?', '');

	//Формируем объект результата
	//Имя свойства объекта = имя GET переменной
	//Значение свойства объекта = значение GET переменной
	var result = {};
	for (var i=0; i<resArray.length; i++){
		var item = resArray[i].split("=");
		result[item[0]] = item[1];
		item = null;
	}

	//Возвращаем полученный объект
	return result;
}
