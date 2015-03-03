function parseGetParams(){
	//Получаем данные о URL
	var href = window.location.href;
	var origin = window.location.origin;
	var pathname = window.location.pathname;

	//Убираем начало адреса
	var beforeGET = origin+pathname;
	var withoutAdress = href.replace(beforeGET, '');

	//Убираем хэш-данные
	var withoutHash = withoutAdress.split('#');

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