<%-- 
    Document   : listaproductos
    Created on : May 31, 2022, 11:13:35 AM
    Author     : Dell
--%>

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@page import="delivery.codekillers.model.Product"%>
<%@page import="delivery.codekillers.dao.ProductDAO"%>
<%@page import="java.util.List"%>
<%@page import="com.mongodb.MongoClient"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%
    String errmsg = "";
    MongoClient mongo = (MongoClient) request.getServletContext()
    .getAttribute("MONGO_CLIENT");
    ProductDAO productDao = new ProductDAO(mongo);

    List<Product> products = productDao.getList();
    if (products == null || products.size() == 0) {
        errmsg = "No existen productos registrados!";
    }

    pageContext.setAttribute("errmsg", errmsg);
    pageContext.setAttribute("products", products);
%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Delivery Codekillers</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
<jsp:include page="Inicio.jsp" />

<div class="container">
  <h2>Productos</h2>
  <p>Datos registrados en MongoDB Atlas</p>
  <table class="table">
    <thead>
      <tr>
        <th>ID Producto</th>
        <th>Nombre Producto</th>
        <th>Precio</th>
        <th>Operaciones</th>
      </tr>
    </thead>
    <tbody>
      <c:choose>
        <c:when test="${not empty errmsg}">
          <tr style='color:red'><td>${errmsg}</td></tr>
        </c:when>
        <c:otherwise>
          <c:forEach var="product" items="${products}">
            <tr>
              <td><c:out value="${product.id}"/></td>
              <td><c:out value="${product.name}"/></td>
              <td><fmt:setLocale value="en_US"/><fmt:formatNumber value="${product.price}" type="currency"/></td>
              <td><a class="btn btn-success" href="editarproducto.jsp?id=${product.id}">Edit</a>&nbsp;<a class="btn btn-danger" href="eliminarproducto.jsp?id=${product.id}" onclick="return confirm('Está seguro de eliminar el producto?')">Delete</a></td>
            </tr>
          </c:forEach>
        </c:otherwise>
      </c:choose>
    </tbody>
  </table>
</div>
</body>
</html>