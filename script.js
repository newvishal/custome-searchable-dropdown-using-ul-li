angular.module('todoApp', []).controller('TodoListController', function () {
  var todoList = this;

  todoList.isDataFound = false;
  todoList.isShowList = false;
  todoList.SelectedOptionValue = null;
  todoList.UserList = [
    { Name: 'abc', Id: 1 },
    { Name: 'cde', Id: 2 },
    { Name: 'fgh', Id: 3 },
    { Name: 'ijk', Id: 4 },
    { Name: 'lmn', Id: 5 },
    { Name: 'opq', Id: 6 },
    { Name: 'opq', Id: 7 },
  ];
  todoList.SearchList = function () {
    //search logic
    let Search = todoList.SearchText;
    var isFond = false;
    filter = Search.toUpperCase();
    ul = document.getElementById('ULOfListData');
    li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName('a')[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = 'block';
      } else {
        li[i].style.display = 'none';
      }
    }

    var count = 0;
    for (i = 0; i < li.length; i++) {
      if (li[i].style.display === 'none') {
        count += 1;
      }
    }

    if (li.length === count) {
      isFond = true;
      todoList.isDataFound = isFond;
      return;
    }
    isFond = false;
    todoList.isDataFound = isFond;
  };
});
