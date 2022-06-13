<%-- 
    Document   : eliminarproducto
    Created on : May 31, 2022, 11:23:36 AM
    Author     : Dell
--%>

<%--El código fue tomado del repositorio de Github https://github.com/jojozhuang/tutorial-projects
//@author jojozhuang --%>

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@page import="delivery.codekillers.dao.ProductDAO"%>
<%@page import="com.mongodb.MongoClient"%>
<%
    String id = request.getParameter("id");
    String errmsg = "";

    if (id == null || id.isEmpty()) {
        errmsg = "Invalid parameter!";
    } else {
        MongoClient mongo = (MongoClient) request.getServletContext()
                .getAttribute("MONGO_CLIENT");
        ProductDAO productDao = new ProductDAO(mongo);
        if (productDao.exists(id)) {
            productDao.delete(id);
            response.sendRedirect("listaproductos.jsp");
        } else {
            errmsg = "No Product found!";
        }
    }

    pageContext.setAttribute("errmsg", errmsg);
%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>MongoDB Tutorial</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
<jsp:include page="Inicio.jsp" />
<div>
  <h3>Delete Product</h3>
  <h3 style='color:red'>${errmsg}</h3>
</div>
</body>
</html>
