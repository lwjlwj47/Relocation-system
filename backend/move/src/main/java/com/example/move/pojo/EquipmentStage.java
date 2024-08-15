package com.example.move.pojo;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import lombok.Data;

/**
 * 设备工序表（项目房间里面有设备，一个设备里面有多道工序）
 * @TableName equipment_stage
 */
@TableName(value ="equipment_stage")
@Data
public class EquipmentStage implements Serializable {
    /**
     * 主键id
     */
    @TableId(type = IdType.AUTO)
    private Integer id;

    /**
     * 设备对应的id
     */
    private Integer equipmentId;

    /**
     * 设备包含的工序
     */
    private Integer stage;

    /**
     * 工序图片
     */
    private String stageImage;

    @TableField(exist = false)
    private static final long serialVersionUID = 1L;
}