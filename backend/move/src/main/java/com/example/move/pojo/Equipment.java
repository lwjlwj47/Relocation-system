package com.example.move.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import lombok.Data;

/**
 * 项目设备表
 * @TableName equipment
 */
@TableName(value ="equipment")
@Data
public class Equipment implements Serializable {
    /**
     * 设备id
     */
    @TableId(type = IdType.AUTO)
    private Integer equipmentId;

    /**
     * 项目id（该设备所对应的项目）
     */
    private Integer projectId;

    /**
     * 设备名称
     */
    private String equipmentName;

    /**
     * 房间id（该设备对应使用项目中具体房间）
     */
    private Integer roomId;

    /**
     * 设备备注
     */
    private String equipmentRemark;

    /**
     * 设备等级
     */
    private String equipmentRank;

    /**
     * 设备当前的处理环节（1,2,3...）
     */
    private Integer equipmentProcess;

    /**
     * 设备头像
     */
    private byte[] equipmentImage;
//    private String equipmentImage;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}