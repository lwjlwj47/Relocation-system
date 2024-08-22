package com.example.move.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import lombok.Data;

/**
 * 管理员端，公司人员表
 * @TableName staff
 */
@TableName(value ="staff")
@Data
public class Staff implements Serializable {
    /**
     * 职工id
     */
    @TableId(type = IdType.AUTO)
    private Integer staffId;

    /**
     * 职工类型
     */
    private String staffType;

    /**
     * 职工姓名
     */
    private String staffName;

    /**
     * 职工身份证
     */
    private String staffIdNo;

    /**
     * 职工手机号
     */
    private String staffPhoneNo;

    /**
     * 职工微信号
     */
    private String staffWechatNo;

    /**
     * 职工职位
     */
    private String staffPos;

    /**
     * 职工状态(0:离职，1：正常)
     */
    private String staffStatus;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}