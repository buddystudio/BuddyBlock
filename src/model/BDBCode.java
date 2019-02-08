package model;

import util.debug.BDInoCode;
/*
 *  author bonizlee
 */
public class BDBCode 
{
	BDInoCode inoCode;
	String xmlCode;
	String codePath;
	
	public String getCodePath() {
		return codePath;
	}
	public void setCodePath(String codePath) {
		this.codePath = codePath;
	}
	public BDInoCode getInoCode() {
		return inoCode;
	}
	public void setInoCode(BDInoCode inoCode) {
		this.inoCode = inoCode;
	}
	
	
	public String getXmlCode() {
		return xmlCode;
	}
	public void setXmlCode(String xmlCode) {
		this.xmlCode = xmlCode;
	}
}
