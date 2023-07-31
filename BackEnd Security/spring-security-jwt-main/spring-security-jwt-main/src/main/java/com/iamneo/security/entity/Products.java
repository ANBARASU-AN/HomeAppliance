package com.iamneo.security.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name = "products")
public class Products {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pid;
	
    

	@Column(nullable = false)
    private int productId;

    @Column(nullable = false)
    private String productName;

    @Column(nullable = false)
    private String productModel;

    @Column(nullable = false)
    private String productModelId;

    @Column(nullable = false)
    private int productYear;




	@Column(name = "email", nullable = false)
    private String email;
	

    public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}


    public Long getPid() {
		return pid;
	}

	public void setPid(Long pid) {
		this.pid = pid;
	}

    public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductModel() {
		return productModel;
	}

	public void setProductModel(String productModel) {
		this.productModel = productModel;
	}

	public String getProductModelId() {
		return productModelId;
	}

	public void setProductModelId(String productModelId) {
		this.productModelId = productModelId;
	}

	public int getProductYear() {
		return productYear;
	}

	public void setProductYear(int productYear) {
		this.productYear = productYear;
	}



    @Override
    public String toString() {
        return "productId=" + productId + "productName=" + productName + "productModel=" + productModel
                + "productModelId=" + productModelId + "productYear=" + productYear + "email=" + email;
    }
}

